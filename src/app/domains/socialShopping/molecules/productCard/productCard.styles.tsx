import styled from 'styled-components';
import { baseTheme, Font, FontWeight } from '../../../../../utils/theme';
import { CenteredFlexboxColumn } from '../../../../../utils/mixins';

type StyledPriceAndAvailabilityProps = {
  isProductAvailable: boolean;
};

export const StyledPriceAndAvailability = styled.div<
  StyledPriceAndAvailabilityProps
>`
  display: flex;
  flex-direction: row;
  justify-items: flex-start;
  font-family: ${Font.primary};

  .availability {
    font-size: 14px;
    font-weight: ${FontWeight.Bold};
    margin: 0;
    color: ${(props): string =>
      props.isProductAvailable
        ? baseTheme.colors.greenSecondary
        : baseTheme.colors.orangePrimary};
  }
`;

export const StyledProductCardDescription = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;

  font-size: 14px;
  line-height: 21px;
  color: ${baseTheme.colors.grey5};

  .commonTitle {
    max-width: 300px;
    color: ${baseTheme.sectionColors.greyAutoMoto};
    margin-bottom: 30px;
    line-height: 46px;
    white-space: pre-wrap;
  }

  .productName {
    a {
      color: ${baseTheme.colors.bluePrimary};
      font-weight: ${FontWeight.Bold};
      text-decoration: none;
      max-width: 250px;
    }
  }
`;

export const StyledProductCardImage = styled.div`
  position: relative;
  height: 250px;
  margin-bottom: 20px;

  img {
    height: 100%;
  }
`;

export const StyledProductCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: ${Font.primary};

  ${StyledProductCardDescription} {
    max-width: 400px;
    margin-right: 75px;
  }

  ${StyledProductCardImage} {
    margin-top: 35px;
  }

  .landingPage {
    display: flex;
    padding: 40px;
    background: ${baseTheme.colors.white};
    border-radius: 8px;
    box-shadow: 0px -20px 20px #0000001a;
    width: 100%;
    max-height: 250px;

    .descriptionWrapper {
      max-width: 56%;
    }
  }

  h2 {
    margin: 0 0 30px 0;
    font-size: 24px;
  }

  .productName {
    margin: 0;
  }

  .description {
    margin: 10px 0;
  }
`;

export const StyledMobileProductCard = styled.div`
  position: relative;

  ${CenteredFlexboxColumn};

  ${StyledPriceAndAvailability} {
    justify-content: center;
  }

  .commonTitle {
    font-weight: ${FontWeight.Regular};
    margin: 20px auto;
    max-width: 250px;
    text-align: center;
    color: ${baseTheme.sectionColors.greyAutoMoto};
    line-height: 32px;
    white-space: pre-wrap;
  }

  .productName {
    font-weight: ${FontWeight.Bold};
    margin-bottom: 0;
    a {
      text-decoration: none;
      color: ${baseTheme.colors.bluePrimary};
    }
  }

  .description {
    margin-top: 10px;
    margin-bottom: 0;
  }

  ${StyledPriceAndAvailability} {
    margin-top: 20px;
  }

  ${StyledProductCardImage} {
    height: 200px;
    width: 200px;
    align-self: flex-start;
    margin-left: 24px;
  }
`;

export const StyledCircleInfo = styled.div`
  box-sizing: border-box;
  height: 105px;
  width: 105px;
  border-radius: 100px;
  ${CenteredFlexboxColumn};
  position: absolute;
  right: -80px;

  p {
    width: 100%;
    white-space: pre-wrap;
    margin: 0;
  }
`;
export const StyledIconBubble = styled(StyledCircleInfo)`
  top: 10px;
  padding: 15px;
  z-index: 100;

  box-shadow: rgba(0, 0, 0, 0.1) 2px 2px 11px;
  background: ${baseTheme.colors.white};
  p {
    font-weight: ${FontWeight.Medium};
  }
`;
export const StyledRedInfoBubble = styled(StyledCircleInfo)`
  top: 90px;
  padding: 5px;
  z-index: 90;
  background-color: ${baseTheme.colors.redPrice};
  font-weight: ${FontWeight.Bold};
  color: ${baseTheme.colors.white};

  p {
    font-size: 18px;
    line-height: 24px;
    margin: 0;
  }
`;
