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
import React from 'react';
import { SocialShoppingOrderDetailProps } from '../../../pages/orderDetail/orderDetail.data';
import { OfferDescription } from '../../../atoms/orderDetailOfferDescription/offerDescription';
import Button, {
  ButtonColor,
  ButtonSize,
  ButtonWidth,
} from '../../../../../sharedComponents/atoms/button/button';
import ButtonIcon from '../../../../../sharedComponents/atoms/button/buttonIcon';
import iconShare from '../../../../../../assets/icons/shareIcon.svg';
import { GroupStatus } from '../../../../../services/socialShopping/groupDetail.data';
import { EventType } from '../../../../../../utils/analytics/analytics';
import { useAnalyticsContext } from '../../../../../services/analyticsContext';

type ActiveOrderDetailContentMobileProps = {
  orderItemInfo: SocialShoppingOrderDetailProps;
  openConfirmationDialog?: () => void;
  share?: () => void;
  leaveGroup?: () => void;
  renderActions?: boolean;
};

export const ActiveOrderDetailContentMobile: React.FC<ActiveOrderDetailContentMobileProps> = ({
  orderItemInfo,
  share,
  openConfirmationDialog,
  renderActions,
}: ActiveOrderDetailContentMobileProps) => {
  const orderDetailEmptySlotData: EmptySlot = {
    emptySlotName: '',
    emptySlotLinkText: orderItemInfo.socialShoppingInfo.participantShareText,
  };

  const { Analytics } = useAnalyticsContext();

  const handleShareButtonClick = (): void => {
    Analytics.callEvent({
      Event: {
        category: 'Social Shopping',
        action: 'Share Button BO Clicked',
      },
      Type: EventType.GoogleAnalyticsEvent,
    });
    if (share) {
      share();
    }
  };

  return (
    <StyledOrderDetailContent>
      <OfferDescription
        status={GroupStatus.Active}
        isMobile={true}
        description={orderItemInfo.socialShoppingInfo.description}
      />
      <StyledStatusAndShareBox
        status={GroupStatus.Active}
        className={'mobileShare'}
        isMobile={true}
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
          width={ButtonWidth.FullWidth}
          onClick={(): void | {} => handleShareButtonClick()}
        >
          <ButtonIcon src={iconShare.toString()} alt='ico' />
          {orderItemInfo.socialShoppingInfo.shareButtonText}
        </Button>
      </StyledStatusAndShareBox>
      <GroupList
        people={orderItemInfo.socialShoppingInfo?.participants}
        groupSize={orderItemInfo.socialShoppingInfo?.groupSize}
        onFullSlotClick={openConfirmationDialog}
        onEmptySlotClick={(): void => handleShareButtonClick()}
        emptySlot={orderDetailEmptySlotData}
        isMobile={true}
        renderActions={renderActions}
        otherMembersText={orderItemInfo.socialShoppingInfo.memberStatusText}
      />
    </StyledOrderDetailContent>
  );
};
