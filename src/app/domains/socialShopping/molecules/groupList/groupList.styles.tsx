import styled from 'styled-components';
import { baseTheme } from '../../../../../utils/theme';

export const StyledDesktopUl = styled.ul`
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  position: relative;

  &.collapsed {
    height: 200px;
    max-height: 200px;
    overflow: hidden;
  }

  &.expanded {
    overflow: visible;
  }

  li {
    box-sizing: border-box;
    margin-bottom: 20px;
    margin-right: 80px;
    width: 250px;

    &:before {
      margin-right: 10px;
    }
  }

  .showFullList {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 0;
    padding-left: 30px;
    height: 40px;
    width: 100%;

    border-width: 5px 0 0 0;
    border-style: solid;
    border-color: transparent;
    background: ${baseTheme.colors.white};
    background: linear-gradient(360deg, rgba(255, 255, 255) 70%, #ffffffb0 10%);
    box-shadow: rgba(255, 255, 255, 1) 0px -5px 20px 20px;

    &.expanded {
      position: relative;
    }

    &__btn {
      font-size: 14px;
      margin-top: 0;
      color: ${baseTheme.colors.blueSecondary};
      text-align: left;
      text-decoration: underline;
      outline: none;
      background-color: transparent;
      border: none;

      &:hover {
        cursor: pointer;
      }

      &:before {
        content: '';
        position: absolute;
        left: 15px;
        top: 8px;
        display: block;
        border-bottom: 2px solid ${baseTheme.colors.blueSecondary};
        border-right: 2px solid ${baseTheme.colors.blueSecondary};
        border-radius: 0 0 3px 0;
        width: 12px;
        height: 12px;
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &.expanded:before {
        top: 13px;
        transform: translate(-50%, -50%) rotate(225deg);
      }
    }
  }
`;

export const StyledMobileUl = styled(StyledDesktopUl)`
  flex-wrap: nowrap;

  li {
    margin-right: 0;
    width: 100%;
  }
`;
