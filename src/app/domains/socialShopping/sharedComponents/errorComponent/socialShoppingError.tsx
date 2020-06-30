import React from 'react';
import styled from 'styled-components';

import { baseTheme } from '../../../../../utils/theme';
import Button, {
  ButtonColor,
  ButtonSize,
  ButtonWidth,
} from '../../../../sharedComponents/atoms/button/button';

type StyledButtonWithCrossType = {
  size?: number;
  color?: string;
};

type SocialShoppingErrorType = {
  retryFetch?: () => void;
};

const StyledButtonWithCross = styled('div')<StyledButtonWithCrossType>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: ${(props): string => (props.size ? `${props.size}px` : '25px')};
  width: ${(props): string => (props.size ? `${props.size}px` : '25px')};
  border-radius: 50%;
  position: relative;
  border: 2px solid
    ${(props): string => (props.color ? props.color : baseTheme.colors.grey6)};

  span {
    background-color: ${(props): string =>
      props.color ? props.color : baseTheme.colors.grey6};
    height: 2px;
    width: ${(props): number => (props?.size ? props.size * 0.45 : 20)}px;
    border-radius: 5px;
    position: absolute;
  }
`;

const ButtonWithCross: React.FC<StyledButtonWithCrossType> = ({
  size,
  color,
}: StyledButtonWithCrossType) => (
  <StyledButtonWithCross size={size} color={color}>
    <span style={{ transform: 'rotate(45deg)' }} />
    <span style={{ transform: 'rotate(-45deg)' }} />
  </StyledButtonWithCross>
);

export const SocialShoppingError: React.FC<SocialShoppingErrorType> = ({
  retryFetch,
}) => {
  const handleRetryFetch = (): void => {
    if (retryFetch) {
      retryFetch();
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Roboto', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '110px',
      }}
    >
      <ButtonWithCross size={80} color={baseTheme.colors.redPrice} />
      <p
        style={{
          fontWeight: 'bold',
          fontSize: '24px',
          color: `${baseTheme.colors.redPrice}`,
          margin: '20px auto 0 auto',
        }}
      >
        Stránku se nepodařilo načíst
      </p>
      <p
        style={{
          fontSize: '14px',
          color: `${baseTheme.colors.grey6}`,
          margin: '10px auto 20px auto',
        }}
      >
        Zkuste to prosím znovu, nebo později.
      </p>
      <Button
        color={ButtonColor.Grey}
        size={ButtonSize.Normal}
        width={ButtonWidth.Inline}
        onClick={(): void => handleRetryFetch()}
      >
        Zkuste znovu
      </Button>
    </div>
  );
};
