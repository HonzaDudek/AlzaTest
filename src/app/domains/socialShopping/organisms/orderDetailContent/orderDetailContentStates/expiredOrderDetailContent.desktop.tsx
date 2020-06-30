import { OfferDescription } from '../../../atoms/orderDetailOfferDescription/offerDescription';
import Button, {
  ButtonColor,
  ButtonSize,
  ButtonWidth,
} from '../../../../../sharedComponents/atoms/button/button';
import { BuyBasketIcon } from '../../../../../../assets/icons/buyBasketIcon';
import { baseTheme } from '../../../../../../utils/theme';
import React from 'react';
import { CrossIcon } from '../../../../../../assets/icons/crossIcon';
import { SocialShoppingOrderDetailProps } from '../../../pages/orderDetail/orderDetail.data';
import {
  ButtonControls,
  StyledExpiredOrderDetailContent,
} from '../orderDetailContent.styles';
import { GroupStatus } from '../../../../../services/socialShopping/groupDetail.data';

export type DetailContentDesktopProps = {
  orderItemInfo: SocialShoppingOrderDetailProps;
  buyProduct?: (() => void) | null;
  removeProduct?: (() => void) | null;
  share?: () => void;
};

export const ExpiredOrderDetailContentDesktop: React.FC<DetailContentDesktopProps> = ({
  orderItemInfo,
  buyProduct,
  removeProduct,
}: DetailContentDesktopProps) => {
  return (
    <StyledExpiredOrderDetailContent>
      <OfferDescription
        status={GroupStatus.Expired}
        className='offerDescription'
        description={orderItemInfo.socialShoppingInfo.description}
      />
      <ButtonControls>
        {buyProduct && (
          <Button
            color={ButtonColor.Green}
            size={ButtonSize.Normal}
            width={ButtonWidth.Inline}
            onClick={buyProduct}
          >
            <BuyBasketIcon fill={baseTheme.colors.white} />
            {orderItemInfo.socialShoppingInfo.paymentAction?.name}
          </Button>
        )}
        {removeProduct && (
          <Button
            color={ButtonColor.Grey}
            size={ButtonSize.Normal}
            width={ButtonWidth.Inline}
            onClick={removeProduct}
          >
            <CrossIcon fill={baseTheme.colors.redPrimaryLight} />
            {orderItemInfo.socialShoppingInfo.refundAction?.name}
          </Button>
        )}
      </ButtonControls>
    </StyledExpiredOrderDetailContent>
  );
};
