import {
  StyledShareFooterBackground,
  StyledShareFooterContent,
  StyledShareFooterDesktop,
  StyledSharingButtons,
} from '../../pages/groupDetail/groupDetail.styles';
import AlzaHeading, {
  AlzaHeadingColor,
} from '../../../../sharedComponents/atoms/alzaHeading/alzaHeading';
import AlzaText from '../../../../sharedComponents/atoms/alzaText/alzaText';
import { baseTheme } from '../../../../../utils/theme';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import Button, {
  ButtonColor,
  ButtonSize,
  ButtonWidth,
} from '../../../../sharedComponents/atoms/button/button';
import { CopyToClipboard } from '../../../../../utils/textUtils';
import React from 'react';
import { GroupDetailTexts } from '../../pages/groupDetail/groupDetail.data';

type GroupDetailDesktopFooterProps = {
  shareUrl: string | null;
  texts: GroupDetailTexts;
};

const GroupDetailDesktopFooter: React.FC<GroupDetailDesktopFooterProps> = ({
  shareUrl,
  texts,
}: GroupDetailDesktopFooterProps) => {
  return (
    <StyledShareFooterDesktop>
      <StyledShareFooterContent>
        <AlzaHeading color={AlzaHeadingColor.White} level={2}>
          {texts.sharingTitle}
        </AlzaHeading>
        <AlzaText color={baseTheme.colors.white}>
          {texts.sharingDescription}
        </AlzaText>
        <StyledSharingButtons>
          <FacebookShareButton url={shareUrl ?? window.location.href}>
            <FacebookIcon borderRadius={4} size={40} />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl ?? window.location.href}>
            <TwitterIcon borderRadius={4} size={40} />
          </TwitterShareButton>
          <EmailShareButton url={shareUrl ?? window.location.href}>
            <EmailIcon
              size={40}
              bgStyle={{ fill: baseTheme.colors.yellow }}
              borderRadius={4}
            />
          </EmailShareButton>
          <Button
            color={ButtonColor.Grey}
            width={ButtonWidth.Inline}
            size={ButtonSize.Normal}
            onClick={(): void => {
              CopyToClipboard(shareUrl ?? window.location.href);
            }}
          >
            {texts.sharingButtonText ?? 'Kopírovat odkaz'}
          </Button>
        </StyledSharingButtons>
      </StyledShareFooterContent>
      <img src='/Styles/images/png/alzak-srdce.png' alt={texts?.sharingTitle} />
      <StyledShareFooterBackground
        src='/React/src/assets/SocialShareFooterBg.svg'
        alt={texts.sharingTitle}
      />
    </StyledShareFooterDesktop>
  );
};

export default GroupDetailDesktopFooter;
