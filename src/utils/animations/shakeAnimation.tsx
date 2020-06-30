import { css, FlattenSimpleInterpolation, keyframes } from 'styled-components';

/**
 * Animation for Styled components
 * Usage - animation: ${shakeAnimation};
 */

export const shakeHorizontalAnimationKeyframes = keyframes`
    0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    }
    
    25%, 35% {
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px);
    }
    75%, 85% {
    -webkit-transform: translateX(5px);
    transform: translateX(5px);
    }
    
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
`;

export const shakeVerticalAnimationKeyframes = keyframes`
    0% {
    -webkit-transform: translateY()(0);
    transform: translateY(0);
    }
    
    25%, 35% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    }
    75%, 85% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    }
    
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
`;
export const shakeHorizontalAnimation = (): FlattenSimpleInterpolation => css`
  ${shakeHorizontalAnimationKeyframes} 2s infinite ease-out;
`;

export const shakeVerticalAnimation = (): FlattenSimpleInterpolation => css`
  ${shakeVerticalAnimationKeyframes} 2s infinite ease-out;
`;
