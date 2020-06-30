import React from 'react';
import Button, {
  ButtonColor,
  ButtonSize,
  ButtonWidth,
} from '../../../../sharedComponents/atoms/button/button';
import { getImageUrl } from '../../../../../utils/getImageUrl';
import IconSVG from '../../../../sharedComponents/atoms/iconSVG/iconSVG';

type ProductInfoButtonProps = {
  buttonText?: string | null;
  productUrl: string;
  isMobile?: boolean;
};

export const ProductInfoButton: React.FC<ProductInfoButtonProps> = ({
  buttonText,
  productUrl,
  isMobile = false,
}: ProductInfoButtonProps) => {
  return (
    <Button
      color={ButtonColor.White}
      width={isMobile ? ButtonWidth.FullWidth : ButtonWidth.Inline}
      size={isMobile ? ButtonSize.Normal : ButtonSize.Large}
      onClick={(): void => {
        window.location.href = productUrl;
      }}
    >
      <IconSVG
        src={getImageUrl('Styles/images/svg/circle-info.svg')}
        width={isMobile ? 20 : 25}
        height={isMobile ? 20 : 25}
        className='icn btn__icn_productInfo'
      />
      {buttonText ?? 'Podrobnosti o zboží'}
    </Button>
  );
};
