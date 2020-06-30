import { socialShoppingShareGroupType } from '../shareComponent.types';
import React, { FC } from 'react';
import { ShareDialog } from '../../../sharedComponents/shareDialog/shareDialog';

type peopleProps = {
  group: socialShoppingShareGroupType;
};
const DialogContent: FC<peopleProps> = ({ group }) => {
  return (
    <ShareDialog
      url={group.sharingDialog?.shareUrl ?? ''}
      description={group.sharingDialog?.title ?? ''}
      title={group.sharingDialog?.dialogTitle}
      buttonText={group.sharingDialog?.buttonText}
      commodityImg={group.commodity.img}
      commodityName={group.commodity.name}
    />
  );
};

export default DialogContent;
