import React from 'react';
import Button, {
  ButtonColor,
  ButtonSize,
  ButtonWidth,
} from '../../../../sharedComponents/atoms/button/button';
import { handleFormAction } from '../../../../services/formHandler';
import { getImageUrl } from '../../../../../utils/getImageUrl';
import { LPButtonProps } from '../../pages/groupDetail/components/groupStatus';
import IconSVG from '../../../../sharedComponents/atoms/iconSVG/iconSVG';

export const BuyForFullPriceWhiteButton: React.FC<LPButtonProps> = ({
  groupDetails,
  isMobile,
}: LPButtonProps) => {
  return (
    <Button
      color={ButtonColor.White}
      width={isMobile ? ButtonWidth.FullWidth : ButtonWidth.Inline}
      size={isMobile ? ButtonSize.Normal : ButtonSize.Large}
      onClick={(): void =>
        handleFormAction(groupDetails.addToBasketAction?.form, '/Order1.htm')
      }
    >
      <IconSVG
        src={getImageUrl('Styles/images/svg/shopping-cart.svg')}
        width={isMobile ? 20 : 25}
        height={isMobile ? 20 : 25}
        className='icn btn__icn__cart--green'
      />
      {groupDetails.addToBasketAction?.name ??
        `Koupit za ${groupDetails.commodity.originalPrice}`}
    </Button>
  );
};

export const BuyForFullPriceGreenButton: React.FC<LPButtonProps> = ({
  groupDetails,
  isMobile,
}: LPButtonProps) => {
  return (
    <Button
      color={ButtonColor.Green}
      width={isMobile ? ButtonWidth.FullWidth : ButtonWidth.Inline}
      size={isMobile ? ButtonSize.Normal : ButtonSize.Large}
      onClick={(): void =>
        handleFormAction(groupDetails.addToBasketAction?.form, '/Order1.htm')
      }
    >
      <IconSVG
        src={getImageUrl('/Styles/images/svg/shopping-cart.svg')}
        width={isMobile ? 20 : 25}
        height={isMobile ? 20 : 25}
        className='icn btn__icn__cart--white'
      />
      {groupDetails.addToBasketAction?.name ??
        `Koupit za ${groupDetails.commodity.originalPrice}`}
    </Button>
  );
};
