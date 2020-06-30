import Button, {
  ButtonColor,
  ButtonWidth,
} from '../../../../sharedComponents/atoms/button/button';
import IconSVG from '../../../../sharedComponents/atoms/iconSVG/iconSVG';
import React from 'react';
import { getImageUrl } from '../../../../../utils/getImageUrl';

type MoreInfoButtonProps = {
  url: string;
  text: string;
  isMobile: boolean;
};

const MoreInfoButton: React.FC<MoreInfoButtonProps> = ({
  url,
  text,
  isMobile,
}: MoreInfoButtonProps) => {
  return (
    <Button
      color={ButtonColor.Grey}
      onClick={(): void => {
        window.open(url, '_blank');
      }}
      width={isMobile ? ButtonWidth.FullWidth : ButtonWidth.Inline}
      data-testid='test-btn-moreInfo'
    >
      <IconSVG
        src={getImageUrl('Styles/images/svg/icon-new-window.svg')}
        className='icn btn__icn__moreInfo'
      />
      {text}
    </Button>
  );
};

export default MoreInfoButton;
