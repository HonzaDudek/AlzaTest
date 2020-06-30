import React from 'react';
import Button, {
  ButtonColor,
  ButtonSize,
  ButtonWidth,
} from '../../../../sharedComponents/atoms/button/button';
import { getImageUrl } from '../../../../../utils/getImageUrl';
import {
  handleRedirect,
  LPDisplayOrderButtonProps,
} from '../../pages/groupDetail/components/groupStatus';
import IconSVG from '../../../../sharedComponents/atoms/iconSVG/iconSVG';

export const DisplayOrderButton: React.FC<LPDisplayOrderButtonProps> = ({
  groupDetails,
  redirectUrl,
  isMobile = false,
}: LPDisplayOrderButtonProps) => {
  return (
    <Button
      color={ButtonColor.White}
      width={isMobile ? ButtonWidth.FullWidth : ButtonWidth.Inline}
      size={isMobile ? ButtonSize.Normal : ButtonSize.Large}
      onClick={(): void => handleRedirect(redirectUrl)}
    >
      <IconSVG
        src={getImageUrl('Styles/images/svg/f-orders.svg')}
        width={isMobile ? 20 : 25}
        height={isMobile ? 20 : 25}
        className='icn btn__icn__displayOrder'
      />
      {groupDetails.redirectOrderDetailAction?.name ?? 'Zobrazit objednávku'}
    </Button>
  );
};
