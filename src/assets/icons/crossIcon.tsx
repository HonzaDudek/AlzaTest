import React from 'react';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

import { baseTheme } from '../../utils/theme';

type IconBasicProps = {
  size?: number;
  fill?: string;
  onClick?: () => void;
  'data-testid'?: string;
  className?: string;
};

export const StyledReactSVG = styled(ReactSVG)`
  cursor: pointer;

  > div {
    display: flex;
  }
`;

export const CrossIcon: React.FC<IconBasicProps> = ({
  size = 16,
  fill = baseTheme.colors.black,
  onClick,
  className,
  ...props
}: IconBasicProps) => {
  const sizeString = size.toString();
  return (
    <StyledReactSVG
      src='/Styles/images/svg/fa-close.svg'
      onClick={onClick}
      beforeInjection={(svg): void => {
        svg.setAttribute('fill', fill);
        svg.setAttribute('width', sizeString);
        svg.setAttribute('height', sizeString);
      }}
      data-testid={props['data-testid']}
      className={className}
    />
  );
};
