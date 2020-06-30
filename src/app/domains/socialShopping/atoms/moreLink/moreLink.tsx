import React from 'react';
import { baseTheme, Font } from '../../../../../utils/theme';
import styled from 'styled-components';

type MoreLinkProps = {
  linkText: string;
  linkHref: string;
  size?: string;
};

const StyledMoreLink = styled.a<Partial<MoreLinkProps>>`
  font-family: ${Font.primary};
  display: inline-flex;
  margin: 0;
  font-size: ${(props): string => (props.size ? `${props.size}px` : `14}px`)};
  color: ${baseTheme.colors.bluePrimary};

  &:hover {
    cursor: pointer;
    color: ${baseTheme.colors.blueSecondary};
  }
`;

const MoreLink: React.FC<MoreLinkProps> = ({
  linkText,
  linkHref,
  size = '14',
}: MoreLinkProps) => {
  return (
    <StyledMoreLink href={linkHref} size={size}>
      {` ${linkText} `} »
    </StyledMoreLink>
  );
};

export default MoreLink;
