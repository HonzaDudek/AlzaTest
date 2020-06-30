import styled, { keyframes } from 'styled-components';
import { baseTheme, FontWeight } from '../../../../../utils/theme';
import { buttonIcon } from '../../../../../utils/mixins';
import { StyledDrawerFooter } from '../../../../sharedComponents/molecules/drawerFooter/drawerFooter.styles';
import { StyledTotalSavingsBlock } from './groupDialog.desktop.styles';

export const StyledContent = styled.div`
  padding: 0;
  font-weight: 400;
  line-height: 22px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: fit-content;

  .btn__icon {
    ${buttonIcon}
  }

  ${StyledDrawerFooter} {
    // iPhone Safari Fix
    min-height: 142px;
  }
`;

export const StyledH2 = styled.h2`
  color: ${baseTheme.colors.blueSecondary};
  display: block;
  line-height: 32px;
  font-size: 24px;
  padding: 0;
  margin: 25px 0;
  font-weight: ${FontWeight.Medium};
  text-align: center;
`;

export const StyledText = styled.p`
  margin: 5px 0;
  text-align: center;
`;

export const InfoPanelsBlock = styled.div`
  margin: 10px 0;
  width: 100%;

  h2 {
    padding-bottom: 5px;
    margin-top: 5px;
    margin-bottom: 20px;
  }

  > div {
    width: 100%;
  }
`;

export const FAQWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  .title {
    display: flex;
    padding: 1em;
    color: ${baseTheme.colors.blueSecondaryDarker};
    cursor: pointer;
    &:hover {
      color: ${baseTheme.colors.bluePrimary};
    }
        /* Icon */
    &::before {
      content: '\\276F';
      width: 1em;
      height: 1em;
      text-align: center;
      transition: all 0.2s;
      transform: rotate(90deg) translateX(25%);
    }
  }

  .content {
    padding: 0 1em;
    color: ${baseTheme.colors.black};
    transition: max-height 0.2s;
    display: flex;
    flex-direction: column;
    
    div {
      display: none;
    }
  }

  input {
    display: none;
  }
  // :checked
  input:checked {
    display: none;
    position: absolute;
    opacity: 0;
    z-index: -1;
    + .title {
      &::before {
        content: '\\276E';
      }
    }
    ~ .content {
      max-height: 100%;
      padding: 1em 0;
      div {
        display: flex;
      }
    }
  }
}
`;

// Create the keyframes
const resize = keyframes`
  from {
    height: 0;
  }

  to {
    height: 60px;
  }
`;

export const StyledTotalSavingsBlockMobile = styled(StyledTotalSavingsBlock)`
  justify-content: center;
  height: 60px;
  width: calc(100% + 40px);
  border-bottom: 1px dashed ${baseTheme.colors.grey4};
  animation: ${resize} 0.2s linear;
`;

export const StyledContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;
