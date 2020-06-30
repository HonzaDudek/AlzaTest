import styled from 'styled-components';

export type SkeletonLineProps = {
  height?: string | '15px';
  width?: string | '100%';
};

type SkeletonRegularShapeType = {
  size: number | 20;
};

export const StyledSkeletonPulsePanel = styled.div`
  margin: 5px 0;
  display: inline-block;
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -135% 0;
    }
  }
  border-radius: 5px;
`;

export const StyledSkeletonLine = styled(StyledSkeletonPulsePanel)`
  height: ${(props: SkeletonLineProps): string =>
    props.height ? props.height : '15px'};
  width: ${(props: SkeletonLineProps): string =>
    props.width ? props.width : '100%'};

  &::before {
    content: '\00a0';
  }
`;

export const StyledSkeletonCircle = styled(StyledSkeletonPulsePanel)<
  SkeletonRegularShapeType
>`
  border-radius: 50%;
  height: ${(props: SkeletonRegularShapeType): string =>
    props.size ? `${props.size}px` : '25px'};
  width: ${(props: SkeletonRegularShapeType): string =>
    props.size ? `${props.size}px` : '25px'};
  &::before {
    content: '\00a0';
  }
`;

export const StyledSkeletonRectangle = styled(StyledSkeletonPulsePanel)<
  SkeletonRegularShapeType
>`
  height: ${(props: SkeletonRegularShapeType): string =>
    props.size ? `${props.size}px` : '25px'};
  width: ${(props: SkeletonRegularShapeType): string =>
    props.size ? `${props.size}px` : '25px'};
  &::before {
    content: '\00a0';
  }
`;

export const StyledSkeletonListItem = styled.div`
  max-width: 750px;
  padding: 0 0 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .skeleton-list--item {
    width: 80%;
  }
`;
