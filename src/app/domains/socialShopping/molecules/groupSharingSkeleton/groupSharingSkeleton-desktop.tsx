import React, { FunctionComponent } from 'react';
import GroupSharingContainer from '../../atoms/groupSharingContainer/groupSharingContainer-desktop';
import { StyledSkeletonLine } from '../../../../sharedComponents/atoms/skeletonAtoms/skeletonAtoms';
import { GroupSharingTitle } from '../../atoms/groupSharingTitle/groupSharingTitle';
import { GroupSharingSkeletonProps } from './groupSharingSkeletonPropsType';

export const GroupSharingSkeleton: FunctionComponent<GroupSharingSkeletonProps> = props => {
  return (
    <GroupSharingContainer>
      <GroupSharingTitle>{props.title}</GroupSharingTitle>
      <StyledSkeletonLine height='30px' width='100%' />
      <StyledSkeletonLine height='30px' width='100%' />
      <StyledSkeletonLine height='30px' width='100%' />
    </GroupSharingContainer>
  );
};

export default GroupSharingSkeleton;
