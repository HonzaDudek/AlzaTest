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
import { GroupList } from '../../../molecules/groupList/groupList';
import React from 'react';
import { SocialShoppingOrderDetailProps } from '../../../pages/orderDetail/orderDetail.data';
import { GroupStatus } from '../../../../../services/socialShopping/groupDetail.data';

export type OrderDetailContentProps = {
  orderItemInfo: SocialShoppingOrderDetailProps;
};

export const FullOrderDetailContentMobile: React.FC<OrderDetailContentProps> = ({
  orderItemInfo,
}: OrderDetailContentProps) => {
  return (
    <StyledOrderDetailContent>
      <StyledStatusAndShareBox status={GroupStatus.Full}>
        <StyledProgressBarWithDescription status={GroupStatus.Full}>
          <ProgressBar
            colorTheme={ProgressBarColorThemeEnum.Green}
            minValue={0}
            maxValue={orderItemInfo.socialShoppingInfo.groupSize}
            now={orderItemInfo.socialShoppingInfo.participants.length}
            size={ProgressBarSizeEnum.Small}
          />
          <div className='progressDescription'>
            {orderItemInfo.socialShoppingInfo.description}
          </div>
        </StyledProgressBarWithDescription>
      </StyledStatusAndShareBox>
      <GroupList
        people={orderItemInfo.socialShoppingInfo?.participants}
        groupSize={orderItemInfo.socialShoppingInfo?.groupSize}
        otherMembersText={
          orderItemInfo.socialShoppingInfo.memberStatusText ?? 'Zobrazit členy'
        }
      />
    </StyledOrderDetailContent>
  );
};
