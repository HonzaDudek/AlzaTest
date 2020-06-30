import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import GroupListItem, { GroupListItemProps } from './groupListItem';
import { GroupListItemSkeleton } from './groupListItem.skeletons';

export default {
  component: GroupListItem,
  title: 'Domains/Social Shopping/Atoms/Group List Item',
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
  excludeStories: /.*Data$/,
  decorators: [withKnobs],
};

export const GroupListItemSkeletonExample: React.FC<GroupListItemProps> = () => (
  <GroupListItemSkeleton />
);

export const GroupListItemExample: React.FC<GroupListItemProps> = () => (
  <GroupListItem
    person={{ name: 'Martin', city: 'Praha' }}
    renderActions={true}
  />
);

export const GroupListItemClientExampleAnother: React.FC<GroupListItemProps> = () => (
  <GroupListItem
    person={{ name: 'Martin', city: 'Praha', isOrderClient: true }}
    renderActions={true}
  />
);
