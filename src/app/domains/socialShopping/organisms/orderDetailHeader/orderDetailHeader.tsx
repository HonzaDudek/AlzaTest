import React from 'react';

import { OrderDetailProps } from '../../pages/orderDetail/orderDetail';
import { GroupStatus } from '../../../../services/socialShopping/groupDetail.data';
import { PriceCompareBlock } from '../../atoms/priceCompareBlock/priceCompareBlock';
import { RemoveProductCrossButton } from '../../molecules/removeProductCrossButton/removeProductCrossButton';
import {
  StyledOrderDetailHeaderMobile,
  StyledOrderDetailHeaderDesktop,
} from './orderDetailHeader.styles';

export type OrderDetailHeaderProps = OrderDetailProps & {
  removeProduct: (() => void) | null;
  buyProduct: (() => void) | null;
  openConfirmationDialog?: () => void;
  renderActions?: boolean;
  isMobile: boolean;
};

const GroupDialogContent: React.FC<OrderDetailHeaderProps> = ({
  orderItemInfo,
  removeProduct,
  buyProduct,
  isMobile,
  openConfirmationDialog,
  renderActions,
}: OrderDetailHeaderProps) => {
  return (
    <>
      <img
        className='product-image'
        src={orderItemInfo.imageUrl}
        alt={orderItemInfo.commodityName}
      />

      <div className='product-title'>
        {orderItemInfo.socialShoppingInfo.status === GroupStatus.Expired ? (
          <span>Vypršelo </span>
        ) : null}
        <a
          href={orderItemInfo.commodityUrl}
          className='product-title__link--product'
        >
          {orderItemInfo.commodityName}
        </a>
      </div>

      <span className='product-availability'>{orderItemInfo.status}</span>

      <div className='product-count'>
        <span className='product-count__value'>{orderItemInfo.count} ks</span>
      </div>

      <div className='product-price'>
        <PriceCompareBlock
          actualPrice={orderItemInfo.price}
          originalPrice={orderItemInfo.socialShoppingInfo.originalPrice}
        />
      </div>

      <div className='product-remove'>
        <RemoveProductCrossButton
          isMobile={isMobile}
          removeProduct={removeProduct}
          buyProduct={buyProduct}
          testId={orderItemInfo.commodityId}
          openConfirmationDialog={openConfirmationDialog}
          renderActions={renderActions}
          popoverContent={{
            buttonTexts: {
              confirmButtonText:
                orderItemInfo.socialShoppingInfo.paymentAction?.name,
              refundButtonText:
                orderItemInfo.socialShoppingInfo.refundAction?.name,
            },
          }}
        />
      </div>
    </>
  );
};

export const OrderDetailHeader: React.FC<OrderDetailHeaderProps> = ({
  orderItemInfo,
  removeProduct,
  buyProduct,
  openConfirmationDialog,
  renderActions,
  isMobile,
}: OrderDetailHeaderProps) => {
  return isMobile ? (
    <StyledOrderDetailHeaderMobile>
      <GroupDialogContent
        orderItemInfo={orderItemInfo}
        removeProduct={removeProduct}
        buyProduct={buyProduct}
        openConfirmationDialog={openConfirmationDialog}
        renderActions={renderActions}
        isMobile={isMobile}
      />
    </StyledOrderDetailHeaderMobile>
  ) : (
    <StyledOrderDetailHeaderDesktop>
      <GroupDialogContent
        orderItemInfo={orderItemInfo}
        removeProduct={removeProduct}
        buyProduct={buyProduct}
        renderActions={renderActions}
        isMobile={isMobile}
      />
    </StyledOrderDetailHeaderDesktop>
  );
};
