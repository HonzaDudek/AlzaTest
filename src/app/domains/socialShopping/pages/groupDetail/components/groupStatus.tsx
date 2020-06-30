import React, { useState } from 'react';
/// Custom imports
import {
  GroupDetailData,
  GroupStatus,
} from '../../../../../services/socialShopping/groupDetail.data';
import { handleFormAction } from '../../../../../services/formHandler';
import { useAnalyticsContext } from '../../../../../services/analyticsContext';
import { EventType } from '../../../../../../utils/analytics/analytics';
import NotLoadedActions from '../../../organisms/groupDetailActionRow/notLoadedActions';
import GroupActions from '../../../organisms/groupDetailActionRow/commonGroupAction';

type GroupOptionsProps = {
  groupDetails: GroupDetailData;
  share?: () => void | {};
  redirectUrl?: string;
  isMobile: boolean;
};

export type LPButtonProps = {
  groupDetails: GroupDetailData;
  isMobile: boolean;
};

export type LPDisplayOrderButtonProps = LPButtonProps & {
  redirectUrl: string;
  isMobile?: boolean;
};

export const DisplayGroupStatusOptions: React.FC<GroupOptionsProps> = ({
  groupDetails,
  redirectUrl,
  isMobile,
}) => {
  const { Analytics } = useAnalyticsContext();
  const status = groupDetails.status;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const joinGroupAction = (): void => {
    Analytics.callEvent({
      Event: {
        category: 'Social Shopping',
        action: 'Landing Page Join Group Clicked',
      },
      Type: EventType.GoogleAnalyticsEvent,
    });
    handleFormAction(groupDetails.joinGroupAction?.form, '/Order1.htm');
  };

  switch (status) {
    case GroupStatus.NotLoaded:
      return (
        <NotLoadedActions
          groupDetails={groupDetails}
          joinGroupAction={(): void => joinGroupAction()}
          isMobile={isMobile}
        />
      );
    // We need error page state
    default:
      return (
        <GroupActions
          isMobile={isMobile}
          groupDetails={groupDetails}
          joinGroupAction={joinGroupAction}
          openModalDialog={setIsModalOpen}
          redirectUrl={redirectUrl}
          isModalOpen={isModalOpen}
        />
      );
  }
};
export const handleRedirect = (redirectUrl: string): void => {
  window.location.href = redirectUrl;
};
