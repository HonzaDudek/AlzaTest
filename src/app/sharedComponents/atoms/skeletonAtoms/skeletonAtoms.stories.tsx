import React, { CSSProperties, ReactNode } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  SkeletonListItem,
  StyledSkeletonCircle,
  StyledSkeletonLine,
  StyledSkeletonRectangle,
} from './skeletonAtoms';

const styles: CSSProperties = {
  height: '250px',
  width: '90%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  borderRadius: '10px',
  boxShadow: '3px 3px 8px 6px rgba(20, 20, 20, 0.5)',
  margin: 'auto',
};

export default {
  component: StyledSkeletonLine,
  title: 'Shared Components/Atoms/Skeleton Atoms',
  excludeStories: /.*Data$/,
  decorators: [
    (story: () => React.ReactNode): ReactNode => (
      <div style={styles}>
        {' '}
        <div style={{ width: '90%', minWidth: '320px' }}> {story()}</div>
      </div>
    ),
    withKnobs,
  ],
};

export const SkeletonLineExample: React.FunctionComponent = () => {
  return <StyledSkeletonLine />;
};

export const CustomSizeSkeletonLine: React.FunctionComponent = () => {
  return <StyledSkeletonLine height='40px' width='150px' />;
};

export const SkeletonRectangleExample: React.FunctionComponent = () => {
  return <StyledSkeletonRectangle size={50} />;
};

export const CircleSkeletonLine: React.FunctionComponent = () => {
  return <StyledSkeletonCircle size={50} />;
};

export const SkeletonListItemExample: React.FunctionComponent = () => {
  return <SkeletonListItem />;
};
