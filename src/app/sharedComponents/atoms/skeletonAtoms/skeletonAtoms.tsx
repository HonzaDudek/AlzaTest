import React from 'react';
import {
  StyledSkeletonCircle,
  StyledSkeletonLine,
  StyledSkeletonListItem,
  StyledSkeletonRectangle,
} from './skeletonAtoms.styles';

export const SkeletonListItem: React.FC = () => {
  return (
    <StyledSkeletonListItem>
      <StyledSkeletonRectangle size={26} />
      <div className='skeleton-list--item'>
        <StyledSkeletonLine height='15px' />
        <StyledSkeletonLine width='50%' height='15px' />
      </div>
    </StyledSkeletonListItem>
  );
};

export { StyledSkeletonLine, StyledSkeletonCircle, StyledSkeletonRectangle };
