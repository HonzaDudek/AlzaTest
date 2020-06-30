import { StyledStatusAndShareBox } from '../../../pages/orderDetail/orderDetail.styles';
import {
  StyledFullOrderDetailContent,
  StyledFullOrderList,
  StyledProgressBarWithDescription,
} from '../orderDetailContent.styles';
import { CheckIcon } from '../../../atoms/checkIcon/checkIcon';
import React, { useState } from 'react';
import { GroupStatus } from '../../../../../services/socialShopping/groupDetail.data';
import { DetailContentDesktopProps } from './expiredOrderDetailContent.desktop';
import { GroupList } from '../../../molecules/groupList/groupList';

export const FullOrderDetailContentDesktop: React.FC<DetailContentDesktopProps> = ({
  orderItemInfo,
}: DetailContentDesktopProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <StyledFullOrderDetailContent isExpanded={isExpanded}>
      <StyledStatusAndShareBox status={GroupStatus.Full}>
        <StyledProgressBarWithDescription
          status={GroupStatus.Full}
          isMobile={false}
        >
          {isExpanded ? (
            <GroupList
              groupSize={orderItemInfo.socialShoppingInfo.groupSize}
              people={orderItemInfo.socialShoppingInfo.participants}
              isMobile={false}
              isGroupFull={
                orderItemInfo.socialShoppingInfo.status === GroupStatus.Full
              }
            />
          ) : (
            <StyledFullOrderList>
              {[...Array(orderItemInfo.socialShoppingInfo.groupSize)].map(
                (e, i) => (
                  <CheckIcon key={i} />
                )
              )}
            </StyledFullOrderList>
          )}
          <div className='progressDescription'>
            {orderItemInfo.socialShoppingInfo.description}
            <button onClick={(): void => setIsExpanded(!isExpanded)}>
              {orderItemInfo.socialShoppingInfo.memberStatusText ??
                'Zobrazit členy'}
            </button>
          </div>
        </StyledProgressBarWithDescription>
      </StyledStatusAndShareBox>
    </StyledFullOrderDetailContent>
  );
};
