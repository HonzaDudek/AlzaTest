import React, { FC, Suspense, useEffect, useMemo, useState } from 'react';
import { Portal } from 'react-portal';
// Imported Components
import AlzaDrawer from '../../../../sharedComponents/organisms/drawer/alzaDrawer';
import { SocialShoppingToggle } from '../../molecules/socialShoppingToggleButton/socialShoppingToggle';
import axios from 'axios';
// Imported hooks
import useSocialShoppingToggle from '../../hooks/useSocialShoppingToggle';
import useSocialShoppingPage from '../../hooks/useSocialShoppingPage';
import { SocialShoppingError } from '../../sharedComponents/errorComponent/socialShoppingError';
import { UseSocialShoppingState } from '../../hooks/useSocialShoppingData';
import {
  GroupDialogDesktopSkeleton,
  GroupDialogMobileSkeleton,
  SocialShoppingToggleSkeleton,
} from './groupDialog.skeletons';
import { FormFieldV2 } from '../../../../../utils/apiDataTypes';
import ModalDialog from '../../../../sharedComponents/atoms/modalDialog/modalDialog';
import { GroupDialogMobile } from './groupDialog.mobile';
import { GroupDialogDesktop } from './groupDialog.desktop';
import { getCurrentCulture } from '../../../../services/applicationService';
import { useAnalyticsContext } from '../../../../services/analyticsContext';
import { EventType } from '../../../../../utils/analytics/analytics';
import DetailPagePopupDesktop from '../../molecules/detailPagePopup/detailPagePopup.desktop';
import {
  AlzaPopover,
  alzaPopoverPositionOptions,
} from '../../../../sharedComponents/molecules/alzaPopover/alzaPopover';
import DetailPagePopupMobile from '../../molecules/detailPagePopup/detailPagePopup.mobile';

export type HowToType = {
  description: string;
  decorated: string;
  image: string;
};

export interface AlzaSwipeableDrawerProps {
  /**
   * Text displayed on button, that opens drawer
   */
  toggleButtonText: {
    header: string;
    body: string;
    price: string;
    more: string;
  };

  /**
   * Commodity ID, that is passed to get data about commodity
   */
  commodityId: number;

  /**
   * Api url
   */
  apiUrl: string;

  /**
   * Sets default state of drawer
   */
  isDialogOpen?: boolean | false;

  /**
   * Displays IDs of preselected services accessories for the commodity
   */
  preselectedAccessories: number[];

  /**
   * Value is true if the component is diplayed on mobile device
   */
  isMobile?: boolean;

  popupTexts?: {
    spanText: string | undefined;
    headerText: string | undefined;
    bodyText: string | undefined;
    buttonText: string | undefined;
  };
}

/**
 * Alza drawer acts as dialog on mobile web. It has scrollable content area and can be closed with swipe.
 */
const GroupDialog: FC<AlzaSwipeableDrawerProps> = ({
  isDialogOpen = false,
  commodityId,
  apiUrl,
  preselectedAccessories = [],
  isMobile,
  toggleButtonText,
  popupTexts,
}) => {
  const commodityAccessories = useMemo(
    () => ({
      CommodityId: commodityId,
      Count: 1,
      PricePerItem: 0,
      Services: preselectedAccessories,
      Hooks: [],
    }),
    [commodityId, preselectedAccessories]
  );

  const {
    closeSocialShopping,
    openSocialShopping,
    socialShoppingOpen,
  } = useSocialShoppingToggle(isDialogOpen);

  const {
    selectedPriceLevelValue,
    selectPriceLevelValue,
    socialShoppingData,
    loadSocialShoppingData,
  } = useSocialShoppingPage(apiUrl, commodityAccessories);

  const { Analytics } = useAnalyticsContext();

  const [isPopoverOpen, setIsPopoverOpen] = useState(true);

  const popupLocalStorageID = 'sawSaUPopover';

  const handleClosePopover = (): void => {
    setIsPopoverOpen(false);
    window.localStorage.setItem(popupLocalStorageID, 'true');
  };

  useEffect(() => {
    if (window.localStorage.getItem(popupLocalStorageID)) {
      setIsPopoverOpen(false);
    }
  }, []);

  const handleInsertToBasketClick = (): void => {
    console.log('handleInsertToBasketClick', selectedPriceLevelValue);
    if (
      selectedPriceLevelValue === undefined ||
      socialShoppingData?.data?.priceLevels === undefined ||
      socialShoppingData?.data?.priceLevels === null
    ) {
      return;
    }
    const selectedPriceLevel =
      socialShoppingData?.data?.priceLevels[selectedPriceLevelValue];
    if (!selectedPriceLevel) {
      console.log('Broken selectedPriceLevel');
      return;
    }
    const href = selectedPriceLevel.onSubmit?.form?.href;
    if (!href) {
      return;
    }

    Analytics.callEvent({
      Event: {
        category: 'Social Shopping',
        action: 'Group Dialog Confirmed',
      },
      Type: EventType.GoogleAnalyticsEvent,
    });

    axios
      .post(
        href,
        {
          CommodityId: commodityId,
          Count: 1,
          PricePerItem: selectedPriceLevel.priceText,
          Services:
            window.Alza?.Shared.PageData.commodityDetailSelectedAccessories ??
            [],
          Hooks: [],
          LevelId: selectedPriceLevel?.onSubmit?.form?.value?.find(
            (val: FormFieldV2) => val.name === 'levelId'
          )?.value,
        },
        {
          headers: { 'Accept-Language': getCurrentCulture() },
        }
      )
      .then(() => {
        window.location.href = '/Order1.htm';
      });
  };

  const socialShoppingState: React.FC<UseSocialShoppingState> = (
    socialShoppingData: UseSocialShoppingState
  ) => {
    if (socialShoppingData.isError) {
      return (
        <SocialShoppingError
          retryFetch={(): void =>
            loadSocialShoppingData(apiUrl, commodityAccessories)
          }
        />
      );
    } else if (socialShoppingData.isLoading) {
      return isMobile ? (
        <GroupDialogMobileSkeleton />
      ) : (
        <GroupDialogDesktopSkeleton />
      );
    } else {
      return isMobile ? (
        <GroupDialogMobile
          addToBasket={handleInsertToBasketClick}
          selectedPriceLevelValue={selectedPriceLevelValue}
          selectPriceLevelValue={(index: number): void =>
            selectPriceLevelValue(index)
          }
          socialShoppingData={socialShoppingData}
          closeSocialShopping={closeSocialShopping}
        />
      ) : (
        <GroupDialogDesktop
          addToBasket={handleInsertToBasketClick}
          selectedPriceLevelValue={selectedPriceLevelValue}
          selectPriceLevelValue={(index: number): void =>
            selectPriceLevelValue(index)
          }
          socialShoppingData={socialShoppingData}
          closeSocialShopping={closeSocialShopping}
        />
      );
    }
  };

  return (
    <>
      <Suspense fallback={<SocialShoppingToggleSkeleton />}>
        {!isMobile ? (
          <AlzaPopover
            isOpen={isPopoverOpen}
            popoverContent={
              <DetailPagePopupDesktop
                popoverTexts={popupTexts}
                setIsOpen={(): void => handleClosePopover()}
              />
            }
            popoverTrigger={
              <SocialShoppingToggle
                onClick={openSocialShopping}
                isLoading={false}
                buttonText={toggleButtonText}
              />
            }
            position={alzaPopoverPositionOptions.Left}
            hasArrow={false}
            onChange={(nextState: boolean): void => setIsPopoverOpen(nextState)}
            style={{ overflow: 'visible' }}
          />
        ) : (
          <AlzaPopover
            isOpen={isPopoverOpen}
            popoverContent={
              <DetailPagePopupMobile
                popoverTexts={popupTexts}
                setIsOpen={(): void => handleClosePopover()}
              />
            }
            popoverTrigger={
              <SocialShoppingToggle
                onClick={openSocialShopping}
                isLoading={false}
                buttonText={toggleButtonText}
              />
            }
            position={alzaPopoverPositionOptions.Top}
            hasArrow={false}
            onChange={(nextState: boolean): void => setIsPopoverOpen(nextState)}
            outsideClickKeepsOpen={true}
            style={{ overflow: 'visible' }}
          />
        )}
      </Suspense>
      <Portal>
        {isMobile ? (
          <AlzaDrawer
            isOpen={socialShoppingOpen}
            onChange={closeSocialShopping}
            fullScreen={true}
          >
            {socialShoppingState(socialShoppingData)}
          </AlzaDrawer>
        ) : (
          <ModalDialog
            isOpen={socialShoppingOpen}
            onChange={closeSocialShopping}
          >
            {socialShoppingState(socialShoppingData)}
          </ModalDialog>
        )}
      </Portal>
    </>
  );
};

export default GroupDialog;
