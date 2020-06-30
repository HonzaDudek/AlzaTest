import { StyledShareFooter } from '../../pages/groupDetail/groupDetail.styles';
import Button, {
  ButtonColor,
  ButtonSize,
  ButtonWidth,
} from '../../../../sharedComponents/atoms/button/button';
import React from 'react';
import { GroupDetailTexts } from '../../pages/groupDetail/groupDetail.data';
import IconSVG from '../../../../sharedComponents/atoms/iconSVG/iconSVG';
import { getImageUrl } from '../../../../../utils/getImageUrl';

type GroupDetailMobileFooterProps = {
  texts: GroupDetailTexts;
  openShareDialog: () => void;
};

const GroupDetailMobileFooter: React.FC<GroupDetailMobileFooterProps> = ({
  openShareDialog,
  texts,
}: GroupDetailMobileFooterProps) => {
  return (
    <StyledShareFooter>
      <h2>{texts.sharingTitle}</h2>
      <p>{texts.sharingDescription}</p>
      <Button
        color={ButtonColor.Grey}
        width={ButtonWidth.FullWidth}
        size={ButtonSize.Normal}
        onClick={(): void => openShareDialog()}
      >
        <IconSVG
          src={getImageUrl('Styles/images/svg/icon-share.svg')}
          width={20}
          height={20}
          className='icn btn__icn__share--grey'
        />

        {texts.sharingTitle}
      </Button>
      <img src='/Styles/images/png/alzak-srdce.png' alt={texts.sharingTitle} />
    </StyledShareFooter>
  );
};

export default GroupDetailMobileFooter;
