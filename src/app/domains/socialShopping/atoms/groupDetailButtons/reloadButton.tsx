import Button, {
  ButtonColor,
  ButtonSize,
  ButtonWidth,
} from '../../../../sharedComponents/atoms/button/button';
import React from 'react';
import { LPButtonProps } from '../../pages/groupDetail/components/groupStatus';
import IconSVG from '../../../../sharedComponents/atoms/iconSVG/iconSVG';
import { getImageUrl } from '../../../../../utils/getImageUrl';

const ReloadGroupButton: React.FC<LPButtonProps> = ({
  groupDetails,
  isMobile,
}: LPButtonProps) => {
  return (
    <Button
      color={ButtonColor.Blue}
      width={isMobile ? ButtonWidth.FullWidth : ButtonWidth.Inline}
      size={isMobile ? ButtonSize.Normal : ButtonSize.Large}
      onClick={(): void => {
        window.location.reload();
      }}
    >
      <IconSVG
        src={getImageUrl('Styles/images/svg/icon-refresh.svg')}
        width={isMobile ? 20 : 25}
        height={isMobile ? 20 : 25}
        className='icn'
      />
      {groupDetails.texts?.loadingButtonText}
    </Button>
  );
};

export default ReloadGroupButton;
