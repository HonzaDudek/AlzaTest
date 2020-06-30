import React from 'react';
import styled from 'styled-components';
import { baseTheme } from '../../utils/theme';

const StyledBuyBasketIcon = styled.svg`
  .a {
    fill: none;
    stroke: none;
  }
  .b {
    stroke: none;
    fill: ${(props): string =>
      props.fill ? props.fill : baseTheme.colors.greenPrimary};
  }
`;

type BuyBasketIconProps = {
  viewBox?: string;
  width?: string;
  height?: string;
  className?: string;
  fill?: string;
};

export const BuyBasketIcon: React.FC<BuyBasketIconProps> = ({
  viewBox = '0 0 25 20',
  width = '25',
  height = '20',
  className = '',
  fill,
}: BuyBasketIconProps) => (
  <StyledBuyBasketIcon
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    viewBox={viewBox}
    className={className}
    fill={fill}
  >
    <g className='a' fillRule='evenodd'>
      <path d='M0 1h20v20H0z' />
      <path
        className='b'
        d='M6.5 17c.828 0 1.5.672 1.5 1.5S7.328 20 6.5 20 5 19.328 5 18.5 5.672 17 6.5 17zm9 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zM4.374 3l.588 1.999L17.792 5c.551 0 1 .448 1 1 0 .164-.041.325-.118.47l-2.906 5.468c-.347.654-1.026 1.062-1.766 1.062L6.4 12.999l-.864 1.21c-.16.225-.108.537.117.698.084.06.186.093.29.093H17v1H5.943c-.312 0-.617-.098-.872-.28-.674-.48-.83-1.418-.348-2.092l1.229-1.72L3.626 4H1V3h3.374z'
      />
    </g>
  </StyledBuyBasketIcon>
);
