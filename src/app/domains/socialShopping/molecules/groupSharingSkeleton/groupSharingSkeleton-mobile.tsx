import React, { FunctionComponent } from 'react';
import { StyledSkeletonLine } from '../../../../sharedComponents/atoms/skeletonAtoms/skeletonAtoms';
import { GroupSharingTitle } from '../../atoms/groupSharingTitle/groupSharingTitle';
import GroupSharingContainer from '../../atoms/groupSharingContainer/groupSharingContainer-mobile';
import { GroupSharingSkeletonProps } from './groupSharingSkeletonPropsType';

export const GroupSharingSkeleton: FunctionComponent<GroupSharingSkeletonProps> = props => {
  return (
    <GroupSharingContainer>
      <GroupSharingTitle>{props.title}</GroupSharingTitle>
      <StyledSkeletonLine height='34px' width='100%' />
      <StyledSkeletonLine height='34px' width='100%' />
      <StyledSkeletonLine height='34px' width='100%' />
    </GroupSharingContainer>
  );
};

export default GroupSharingSkeleton;
