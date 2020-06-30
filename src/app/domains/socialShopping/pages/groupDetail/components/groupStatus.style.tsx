import styled from 'styled-components';
import { baseTheme, Margins } from '../../../../../../utils/theme';
import { CenteredFlexboxRow } from '../../../../../../utils/mixins';

type StyledButtonGroupProps = {
  isMobile: boolean;
};

export const StyledButtonGroup = styled.div<StyledButtonGroupProps>`
  ${CenteredFlexboxRow};
  flex-wrap: wrap;
  button {
    margin: 5px;
    white-space: nowrap;
    flex-grow: 1;
  }

  .btn__icn__cart--green {
    .b {
      fill: ${baseTheme.colors.greenPrimary};
    }
  }

  .btn__icn__cart--white, 
  .btn__icn__addUser--white {
    .b {
      fill: ${baseTheme.colors.white};
    }
  }
  
  .btn__icn__socialShopping--white {
    circle,
    path {
      fill: ${baseTheme.colors.white};
    }
  }
  
  .btn__icn_productInfo {
    .b {
      fill: ${baseTheme.colors.grey6};
    }
  }
  
  .btn__icn__displayOrder {
    path:last-of-type {
      fill: ${baseTheme.colors.grey6}
    }
  }
  
  svg {
      margin: ${Margins.defaultMarginRight};
    }
  }
`;
