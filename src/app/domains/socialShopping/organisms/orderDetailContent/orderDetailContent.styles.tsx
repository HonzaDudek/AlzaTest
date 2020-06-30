import styled from 'styled-components';
import { baseTheme, Font, FontWeight } from '../../../../../utils/theme';
import { StyledPeopleCounterProps } from '../../pages/orderDetail/orderDetail.styles';
import { GroupStatus } from '../../../../services/socialShopping/groupDetail.data';

type ExpiredOrderDetailProps = {
  isMobile?: boolean;
  isExpanded?: boolean;
};

export const StyledProgressBarWithDescription = styled.div<
  StyledPeopleCounterProps
>`
  display: flex;
  flex-direction: column;

  .progressDescription {
    color: ${(props): string =>
      props.status === GroupStatus.Full
        ? `${baseTheme.colors.greenSecondary}`
        : `${baseTheme.colors.black}`};
  }
`;

export const StyledFullOrderList = styled.div`
  display: flex;
  div:not(:first-of-type) {
    margin-left: -10px;
  }
  div:last-of-type {
    margin-right: 10px;
  }
`;

export const StyledOrderDetailContent = styled.div`
  width: 100%;
  font-family: ${Font.primary};

  .offerDescription {
    margin: 0 auto 15px auto;
  }

  .groupList {
    flex-wrap: wrap;

    li {
      margin-right: 50px;
    }
  }

  .desktopShare {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;

    button {
      margin: 0 10px 0 0;
    }

    div {
      div {
        width: 250px;
      }
    }
  }
`;

export const StyledFullOrderDetailContent = styled(StyledOrderDetailContent)<
  ExpiredOrderDetailProps
>`
  ${StyledProgressBarWithDescription} {
    flex-direction: ${(props): string => (props.isExpanded ? 'column' : 'row')};
    align-items: ${(props): string =>
      props.isExpanded ? 'flex-start' : 'center'};

    .progressDescription {
      color: black;

      button {
        margin-top: 0;
        background: transparent;
        border: none;
        color: ${baseTheme.colors.blueSecondary};
        text-decoration: underline;

        &:hover {
          cursor: pointer;
          color: ${baseTheme.colors.bluePrimary};
        }

        &:active,
        &:focus {
          outline: none;
          border: none;
        }
      }
    }
  }
`;
export const StyledExpiredOrderDetailContent = styled(StyledOrderDetailContent)<
  ExpiredOrderDetailProps
>`
  button {
    margin: ${(props): string => (props.isMobile ? '5px 0' : '0 10px 0 0')};
    font-weight: ${FontWeight.Bold};
    letter-spacing: 0.75px;

    &:first-of-type {
      svg {
        margin-right: 6px;
      }
    }

    &:last-of-type {
      svg {
        margin-right: 15px;
      }
      margin-bottom: 0;
    }
  }
`;

export const ButtonControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
