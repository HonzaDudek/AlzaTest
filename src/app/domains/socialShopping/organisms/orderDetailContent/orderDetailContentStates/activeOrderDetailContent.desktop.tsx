import {
  StyledOrderDetailContent,
  StyledProgressBarWithDescription,
} from '../orderDetailContent.styles';
import { StyledStatusAndShareBox } from '../../../pages/orderDetail/orderDetail.styles';
import ProgressBar from '../../../../../sharedComponents/atoms/progressBar/progressBar';
import {
  ProgressBarColorThemeEnum,
  ProgressBarSizeEnum,
} from '../../../../../sharedComponents/atoms/progressBar/progressBar.theme';
import { EmptySlot, GroupList } from '../../../molecules/groupList/groupList';
import React, { useState } from 'react';
import { OfferDescription } from '../../../atoms/orderDetailOfferDescription/offerDescription';
import Button, {
  ButtonColor,
  ButtonSize,
  ButtonWidth,
} from '../../../../../sharedComponents/atoms/button/button';
import ButtonIcon from '../../../../../sharedComponents/atoms/button/buttonIcon';
import iconShare from '../../../../../../assets/icons/shareIcon.svg';
import ModalDialog from '../../../../../sharedComponents/atoms/modalDialog/modalDialog';
import { ShareDialog } from '../../../sharedComponents/shareDialog/shareDialog';
import { GroupStatus } from '../../../../../services/socialShopping/groupDetail.data';
import { DetailContentDesktopProps } from './expiredOrderDetailContent.desktop';
import { useAnalyticsContext } from '../../../../../services/analyticsContext';
import { EventType } from '../../../../../../utils/analytics/analytics';

export const ActiveOrderDetailContentDesktop: React.FC<DetailContentDesktopProps> = ({
  orderItemInfo,
  buyProduct,
  removeProduct,
}: DetailContentDesktopProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const orderDetailEmptySlotData: EmptySlot = {
    emptySlotName: '',
    emptySlotLinkText: orderItemInfo.socialShoppingInfo.participantShareText,
  };

  const { Analytics } = useAnalyticsContext();

  const handleOpenModal = (nextModalState: boolean): void => {
    Analytics.callEvent({
      Event: {
        category: 'Social Shopping',
        action: 'Share Button BO Clicked',
      },
      Type: EventType.GoogleAnalyticsEvent,
    });
    setIsModalOpen(nextModalState);
  };

  return (
    <StyledOrderDetailContent>
      <OfferDescription
        status={GroupStatus.Active}
        isMobile={false}
        description={orderItemInfo.socialShoppingInfo.description}
      />
      <StyledStatusAndShareBox
        status={GroupStatus.Active}
        className={'desktopShare'}
      >
        <StyledProgressBarWithDescription status={GroupStatus.Active}>
          <ProgressBar
            colorTheme={ProgressBarColorThemeEnum.Blue}
            minValue={0}
            maxValue={orderItemInfo.socialShoppingInfo.groupSize}
            now={orderItemInfo.socialShoppingInfo.participants.length}
            size={ProgressBarSizeEnum.Small}
          />
          <div className='progressDescription'>
            {orderItemInfo.socialShoppingInfo.capacityLeftText}
          </div>
        </StyledProgressBarWithDescription>
        <Button
          color={ButtonColor.Blue}
          size={ButtonSize.Normal}
          width={ButtonWidth.Inline}
          onClick={(): void | {} => handleOpenModal(true)}
        >
          <ButtonIcon src={iconShare.toString()} alt='ico' />
          {orderItemInfo.socialShoppingInfo.shareButtonText}
        </Button>
      </StyledStatusAndShareBox>
      <GroupList
        people={orderItemInfo.socialShoppingInfo?.participants}
        groupSize={orderItemInfo.socialShoppingInfo?.groupSize}
        onEmptySlotClick={(): void => handleOpenModal(true)}
        emptySlot={orderDetailEmptySlotData}
        isMobile={false}
        popoverContent={{
          buyProduct: buyProduct ? buyProduct : null,
          removeProduct: removeProduct ? removeProduct : null,
          buttonTexts: {
            confirmButtonText:
              orderItemInfo.socialShoppingInfo.paymentAction?.name,
            refundButtonText:
              orderItemInfo.socialShoppingInfo.refundAction?.name,
          },
        }}
        otherMembersText={orderItemInfo.socialShoppingInfo.memberStatusText}
      />
      <ModalDialog
        isOpen={isModalOpen}
        onChange={(): void => handleOpenModal(!isModalOpen)}
      >
        <ShareDialog
          url={
            orderItemInfo?.socialShoppingInfo?.sharingDialog?.shareUrl ??
            orderItemInfo.socialShoppingInfo.shareUrl
          }
          description={
            orderItemInfo.socialShoppingInfo.sharingDialog?.title ??
            `Sleva ${orderItemInfo.socialShoppingInfo.priceDifference} na ${orderItemInfo.commodityName}`
          }
          commodityImg={orderItemInfo.imageUrl}
          commodityName={orderItemInfo.commodityName}
          title={
            orderItemInfo.socialShoppingInfo?.sharingDialog?.dialogTitle ??
            'Sdílet'
          }
          buttonText={
            orderItemInfo.socialShoppingInfo?.sharingDialog?.buttonText ??
            'Zkopírovat odkaz'
          }
        />
      </ModalDialog>
    </StyledOrderDetailContent>
  );
};
