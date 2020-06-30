import React from 'react';
import { ShareDialog } from '../../../sharedComponents/shareDialog/shareDialog';
import { socialShoppingShareGroupType } from '../../../organisms/groupSharing/shareComponent.types';

type ShareDialogContentProps = {
  groupInfo: socialShoppingShareGroupType;
};

export const ShareDialogContent: React.FC<ShareDialogContentProps> = ({
  groupInfo,
}) => {
  return (
    <ShareDialog
      url={groupInfo.sharingDialog?.shareUrl ?? ''}
      description={groupInfo.sharingDialog?.title ?? ''}
      buttonText={groupInfo.sharingDialog?.buttonText}
      title={groupInfo.sharingDialog?.dialogTitle}
      commodityImg={groupInfo.commodity.img}
      commodityName={groupInfo.commodity.name}
    />
  );
};
