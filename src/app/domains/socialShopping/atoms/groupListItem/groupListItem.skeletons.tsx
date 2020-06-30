import React from 'react';
import {
  StyledSkeletonCircle,
  StyledSkeletonLine,
} from '../../../../sharedComponents/atoms/skeletonAtoms/skeletonAtoms';

export const GroupListItemSkeleton: React.FC = () => {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <StyledSkeletonCircle
        size={40}
        style={{ maxWidth: '40px', flexBasis: '100%', marginRight: '10px' }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <StyledSkeletonLine height='12px' width='125px' />
        <StyledSkeletonLine height='12px' width='150px' />
      </div>
    </div>
  );
};
