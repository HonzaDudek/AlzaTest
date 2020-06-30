import React from 'react';

// Import custom components

import { OrderDetailContentProps } from '../../pages/orderDetail/orderDetail';
import { ActiveOrderDetailContentMobile } from './orderDetailContentStates/activeOrderDetailContent.mobile';
import { FullOrderDetailContentMobile } from './orderDetailContentStates/fullOrderDetailContent.mobile';
import { FullOrderDetailContentDesktop } from './orderDetailContentStates/fullOrderDetailContent.desktop';
import { ExpiredOrderDetailContentMobile } from './orderDetailContentStates/expiredOrderDetailContent.mobile';
import { ExpiredOrderDetailContentDesktop } from './orderDetailContentStates/expiredOrderDetailContent.desktop';
import { ActiveOrderDetailContentDesktop } from './orderDetailContentStates/activeOrderDetailContent.desktop';
import { GroupStatus } from '../../../../services/socialShopping/groupDetail.data';

export const OrderDetailContent: React.FC<OrderDetailContentProps> = ({
  orderItemInfo,
  share,
  buyProduct,
  removeProduct,
  isMobile,
  openConfirmationDialog,
  renderActions,
}: OrderDetailContentProps) => {
  if (isMobile) {
    if (orderItemInfo.socialShoppingInfo.status === GroupStatus.Full) {
      return <FullOrderDetailContentMobile orderItemInfo={orderItemInfo} />;
    } else if (
      orderItemInfo.socialShoppingInfo.status === GroupStatus.Expired
    ) {
      return (
        <ExpiredOrderDetailContentMobile
          orderItemInfo={orderItemInfo}
          buyProduct={buyProduct}
          removeProduct={removeProduct}
        />
      );
    } else {
      return (
        <ActiveOrderDetailContentMobile
          orderItemInfo={orderItemInfo}
          share={share}
          openConfirmationDialog={openConfirmationDialog}
          renderActions={renderActions}
        />
      );
    }
  } else {
    if (orderItemInfo.socialShoppingInfo.status === GroupStatus.Full) {
      return <FullOrderDetailContentDesktop orderItemInfo={orderItemInfo} />;
    } else if (
      orderItemInfo.socialShoppingInfo.status === GroupStatus.Expired
    ) {
      return (
        <ExpiredOrderDetailContentDesktop
          orderItemInfo={orderItemInfo}
          buyProduct={buyProduct}
          removeProduct={removeProduct}
        />
      );
    } else {
      return (
        <ActiveOrderDetailContentDesktop
          orderItemInfo={orderItemInfo}
          buyProduct={buyProduct}
          removeProduct={removeProduct}
          share={share}
        />
      );
    }
  }
};
