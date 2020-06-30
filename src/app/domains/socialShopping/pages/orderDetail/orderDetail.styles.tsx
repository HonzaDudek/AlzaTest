import styled from 'styled-components';
import { OrderDetailContentProps } from './orderDetail';
import { baseTheme, boxShadowDefault } from '../../../../../utils/theme';
import { GroupStatus } from '../../../../services/socialShopping/groupDetail.data';
import { StyledPanel } from '../../../../sharedComponents/atoms/panel/panel';

export const StyledOrderDetailPanel = styled(StyledPanel)<
  OrderDetailContentProps
>`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  position: relative;

  img {
    opacity: ${(props): string =>
      props.orderItemInfo.socialShoppingInfo.status === GroupStatus.Expired
        ? '0.5'
        : '1'};
  }

  .styledGroupList {
    margin-top: 23px;
  }

  .mobileShare {
  }

  .orderDetailContent {
    margin-left: ${(props): string => (props.isMobile ? '0px' : '110px')};
  }

  .desktopShare {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    justify-content: flex-end;
    align-items: center;

    div {
      width: 230px;
    }

    button {
      height: 36px;
      padding-right: 20px;
      margin: 0 20px 0 0;
    }
  }
`;

export type StyledPeopleCounterProps = {
  status: number;
  isMobile?: boolean;
};

export const StyledStatusAndShareBox = styled.div<StyledPeopleCounterProps>`
  width: 100%;
  margin: ${(props): string =>
    props.status === GroupStatus.Full ? `0` : `20px 0;`};
  button {
    margin-top: 20px;
  }
`;

export const StyledOrderDetailPopover = styled.div`
  button:first-of-type {
    svg {
      margin-right: 6px;
    }
    margin-bottom: 10px;
  }

  button:last-of-type {
    svg {
      margin-right: 15px;
    }
    margin-bottom: 0;
  }
`;

export const PopoverContainerStyles: Partial<CSSStyleDeclaration> = {
  boxShadow: `${boxShadowDefault.default}`,
  overflow: 'visible',
  borderRadius: '4px',
  backgroundColor: `${baseTheme.colors.white}`,
  maxWidth: '335px',
  zIndex: '10',
};
