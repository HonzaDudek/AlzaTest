import React from 'react';
import styled from 'styled-components';
import { baseTheme } from '../../../../../utils/theme';
import { StyledSkeletonLine } from '../../../../sharedComponents/atoms/skeletonAtoms/skeletonAtoms';
import { SkeletonLineProps } from '../../../../sharedComponents/atoms/skeletonAtoms/skeletonAtoms.styles';

export const StyledSocialShoppingProductDetail = styled.div`
  display: flex;
  align-items: center;

  .productDetail--name {
    font-weight: bold;
    color: ${baseTheme.colors.bluePrimaryLight};
    max-width: 300px;
    margin: auto auto auto 10px;
    font-size: 14px;
    text-decoration: none;
  }
`;

type SocialShoppingProductDetailProps = {
  imageUrl: string;
  productUrl: string;
  name: string;
  onClick: () => void;
};

export const ProductDetail: React.FC<SocialShoppingProductDetailProps> = props => {
  return (
    <StyledSocialShoppingProductDetail>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <span onClick={props.onClick}>
        <img src={props.imageUrl} alt={props.name} width='50px' height='50px' />
      </span>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <span className='productDetail--name' onClick={props.onClick}>
        {props.name}
      </span>
    </StyledSocialShoppingProductDetail>
  );
};

export const SocialShoppingProductDetailSkeleton: React.FC<SkeletonLineProps> = () => {
  return (
    <StyledSocialShoppingProductDetail>
      <StyledSkeletonLine width='50px' height='50px' />
      <StyledSkeletonLine />
    </StyledSocialShoppingProductDetail>
  );
};
