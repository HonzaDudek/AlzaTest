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
import { StyledExpiredOrderDetailContent } from '../orderDetailContent.styles';
import { GroupStatus } from '../../../../../services/socialShopping/groupDetail.data';

export type ExpiredDetailContentProps = {
  orderItemInfo: SocialShoppingOrderDetailProps;
  buyProduct?: (() => void) | null;
  removeProduct?: (() => void) | null;
};

export const ExpiredOrderDetailContentMobile: React.FC<ExpiredDetailContentProps> = ({
  orderItemInfo,
  buyProduct,
  removeProduct,
}) => {
  return (
    <StyledExpiredOrderDetailContent isMobile={true}>
      <OfferDescription
        status={GroupStatus.Expired}
        className='offerDescription'
        description={orderItemInfo.socialShoppingInfo.description}
      />
      {buyProduct && (
        <Button
          color={ButtonColor.Green}
          size={ButtonSize.Normal}
          width={ButtonWidth.FullWidth}
          onClick={buyProduct}
        >
          <BuyBasketIcon fill={baseTheme.colors.white} />
          {`Doplatit ${orderItemInfo.price} a koupit`}
        </Button>
      )}
      {removeProduct && (
        <Button
          color={ButtonColor.Grey}
          size={ButtonSize.Normal}
          width={ButtonWidth.FullWidth}
          onClick={removeProduct}
        >
          <CrossIcon fill={baseTheme.colors.redPrimaryLight} />
          {`Odebrat a vrátit peníze`}
        </Button>
      )}
    </StyledExpiredOrderDetailContent>
  );
};
