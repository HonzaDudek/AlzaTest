import {
  StyledGroupStatusDesktop,
  StyledGroupStatusMobile,
} from '../../pages/groupDetail/groupDetail.styles';
import { ReactSVG } from 'react-svg';
import AlzaText, {
  AlzaTextTag,
} from '../../../../sharedComponents/atoms/alzaText/alzaText';
import { baseTheme } from '../../../../../utils/theme';
import React from 'react';
import { JoinGroupButton } from '../../atoms/groupDetailButtons/joinGroupButton';
import { LPButtonProps } from '../../pages/groupDetail/components/groupStatus';
import { StyledButtonGroup } from '../../pages/groupDetail/components/groupStatus.style';
import ReloadGroupButton from '../../atoms/groupDetailButtons/reloadButton';

type NotLoadedDesktopActionsProps = LPButtonProps & {
  joinGroupAction: () => void;
};

const NotLoadedActions: React.FC<NotLoadedDesktopActionsProps> = ({
  groupDetails,
  joinGroupAction,
  isMobile,
}: NotLoadedDesktopActionsProps) => {
  const content = (
    <>
      <ReactSVG src='/React/src/assets/icons/loader.svg' />
      <AlzaText
        tag={AlzaTextTag.Span}
        size='26px'
        color={baseTheme.colors.grey6}
      >
        <b>{groupDetails.texts?.loadingInfoTitle}</b>
      </AlzaText>
      <AlzaText tag={AlzaTextTag.Span} color={baseTheme.colors.grey6}>
        {groupDetails.texts?.loadingInfoDescription}
      </AlzaText>
      <StyledButtonGroup isMobile={isMobile} className='buttonGroup'>
        <ReloadGroupButton groupDetails={groupDetails} isMobile={isMobile} />
        {groupDetails.joinGroupAction && (
          <JoinGroupButton
            joinGroupAction={joinGroupAction}
            groupDetails={groupDetails}
            isMobile={isMobile}
            disabled={!groupDetails.joinGroupAction.enabled}
          />
        )}
      </StyledButtonGroup>
    </>
  );

  return isMobile ? (
    <StyledGroupStatusMobile>{content}</StyledGroupStatusMobile>
  ) : (
    <StyledGroupStatusDesktop>{content}</StyledGroupStatusDesktop>
  );
};

export default NotLoadedActions;
