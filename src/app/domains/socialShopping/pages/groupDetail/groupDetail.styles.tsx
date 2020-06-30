import styled, { css } from 'styled-components';
import {
  baseTheme,
  Borders,
  Font,
  FontWeight,
  Margins,
} from '../../../../../utils/theme';
import { StyledInfoPanelWrapper } from '../../molecules/infoPanel/infoPanel.styles';
import { CenteredFlexboxColumn } from '../../../../../utils/mixins';
import { StyledAccordionItem } from '../../../../sharedComponents/molecules/Accordion/AccordionItem';
import { GroupStatus } from '../../../../services/socialShopping/groupDetail.data';
import { StyledComparePriceBlock } from '../../atoms/priceCompareBlock/priceCompareBlock.styles';
import { StyledActionRowDescription } from '../../atoms/groupDetailActionHeader/groupDetailActionHeader';

const VerticalGroupListItem = css`
  ul {
    max-width: 620px;
    margin: 20px auto 0 auto;
    justify-content: center;

    &.collapsed {
      height: 250px;
      max-height: 250px;
    }

    .showFullList {
      background-color: ${baseTheme.colors.grey0};
      background: linear-gradient(
        360deg,
        ${baseTheme.colors.grey0} 70%,
        ${baseTheme.colors.grey0} 10%
      );
      box-shadow: ${baseTheme.colors.grey0} 0px -5px 20px 20px;

      button {
        font-weight: ${FontWeight.Medium};
      }
    }

    li {
      flex-direction: column;
      margin-right: 20px;
      width: 80px;
      span,
      div {
        width: 100%;
        text-align: center;
      }

      &:before {
        width: 80px;
        height: 80px;
        margin: 0 0 10px 0;
      }
    }
  }
`;

export const StyledGroupInfoText = styled.div`
  font-size: 21px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  p {
    margin: 0 10px 0 0;
  }

  span,
  p {
    font-size: 26px;
  }
`;

export const LinerBorder = styled.div`
  display: block;
  width: 100%;
  border-bottom: 1px dashed ${baseTheme.colors.grey4};
`;

type StyledLandingPageProps = {
  status?: GroupStatus;
  hasAvailableSpots?: boolean;
};

export const StyledLandingPage = styled.div<StyledLandingPageProps>`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  background-color: ${baseTheme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.15) 0 1px 4px;
  box-sizing: border-box;
  
  .icn {
    margin-right: 10px;
  }
  
  .btn__icn__moreInfo {
    .b {
      fill: ${baseTheme.colors.grey6};
    }
  }
  

  
  .icon-green {
    path, circle {
      // The important is actually needed here since SVG is inline styled
      fill: ${baseTheme.colors.greenPrimary} !important;
    }
  }

  .header {
    min-height: ${(props): string =>
      props.hasAvailableSpots ? '60px' : '120px'};

    h1 {
      color: ${baseTheme.colors.white};
      opacity: 1;
    }

    p {
      text-align: center;
      font-size: ${(props): string =>
        props.hasAvailableSpots ? '21px' : '14px'};
      padding: 0 20px;
      line-height: ${(props): string =>
        props.hasAvailableSpots ? '28px' : '22px'};
    }
  }


  .img__mobile {
    height: 90px;
    width: 90px;
  }
  
  .peopleLeft {
    display: block;
    font-size: 21px;
    text-align: center;
    margin: 0 auto 5px auto;
    color: ${baseTheme.sectionColors.greyAutoMoto};
  }
  
  ${StyledInfoPanelWrapper} {
    margin-top: 40px;
    margin-left: 20px;
    margin-right: 20px;
    width: 90%;
  }
  
  ${StyledGroupInfoText}: {
    margin: 0;
  }
  
  ${StyledAccordionItem} {
    width: 100%;
  }
}
`;

export const StyledGroupStatusMobile = styled.div`
  width: 100%;
  ${CenteredFlexboxColumn};
  background-color: ${baseTheme.colors.grey0};

  ${StyledComparePriceBlock} {
    align-items: center;
    justify-content: center;
    margin: 10px 0 0 0;
  }

  ${VerticalGroupListItem}

  .availability {
    font-weight: bold;
    color: ${baseTheme.colors.greenSecondary};
    margin: ${Margins.defaultMargin};
  }

  .groupList {
    margin-top: 20px;
    li {
      margin-right: 15px;
    }
  }

  .buttonGroup {
    width: 100%;
    margin-top: 20px;

    button {
      font-weight: ${FontWeight.Medium};
    }

    button:first-of-type {
      margin-top: 0;
    }
  }

  .actionHeader {
    margin: 0;
    line-height: 30px;
    font-family: ${Font.primary};
    text-align: center;
    font-size: 21px;
    color: ${baseTheme.colors.dark1};
    white-space: pre-wrap;
  }

  .expirationDateText {
    margin: 10px;
  }

  .groupList {
    margin-top: 30px;
  }
`;

export const StyledGroupStatusDesktop = styled.div`
  width: 100%;
  ${CenteredFlexboxColumn};
  button {
    margin-top: 10px;
  }

  .countdown {
    font-size: 14px;
    color: ${baseTheme.colors.grey5};
    margin: 0 0 10px 0;
  }

  ${VerticalGroupListItem}

  .actionHeader {
    margin: 0 0 10px 0;
    line-height: 30px;
    font-family: ${Font.primary};
    text-align: center;
    font-size: 26px;
    color: ${baseTheme.colors.dark1};
  }

  .buttonGroup {
    button {
      margin-bottom: 0;
    }
  }

  .expirationDateText {
    margin: 10px;
  }
`;

export const StyledHeader = styled.div<StyledLandingPageProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 30px auto;
  text-align: center;

  h2,
  h4 {
    color: ${baseTheme.colors.white};
  }
`;

export const StyledShareFooter = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 30px 40px;
  text-align: center;
  background-color: ${baseTheme.colors.dark1};
  color: ${baseTheme.colors.white};

  h2 {
    color: ${baseTheme.colors.white};
    font-size: 21px;
    font-weight: 400;
  }

  p {
    opacity: 0.5;
    margin: 20px 0;
  }

  img {
    max-width: 100%;
  }

  .btn__icn__share--grey {
    div {
      display: flex;
    }
    .c {
      fill: ${baseTheme.colors.grey6};
    }
  }
`;

export const StyledShareFooterDesktop = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  background-color: ${baseTheme.colors.dark1};
  color: ${baseTheme.colors.white};
  min-height: 420px;

  p {
    opacity: 0.5;
  }

  img {
    max-width: 100%;
  }
`;

export const StyledShareFooterContent = styled.div`
  box-sizing: border-box;
  width: 400px;
  position: relative;
  z-index: 1;
  margin: auto;
`;

export const StyledSharingButtons = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin-right: 10px;
    border-radius: ${Borders.defaultBorderRadius};
  }
`;

export const StyledShareFooterBackground = styled.img`
  position: absolute;
  z-index: 0;
  top: -20px;
  left: 50%;
  transform: translate(-50%);
`;

export const StyledFAQContent = styled.div`
  margin: 0 0 20px;
  width: 100%;

  h3 {
    margin-bottom: 30px;
  }
`;

export const StyledInfoWrapper = styled.div`
  display: flex;
  width: 100%;

  ${StyledInfoPanelWrapper} {
    margin: ${Margins.defaultMarginLeftRight};

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export const StyledSection = styled.div`
  box-sizing: border-box;
  padding: 50px;
  width: 100%;
  display: flex;
  justify-content: center;

  ${LinerBorder} {
    width: calc(100% + 90px);
  }

  .howTo__title {
    margin: 0 auto;
    line-height: 40px;
  }
`;

export const StyledWhiteSection = styled(StyledSection)`
  background-color: ${baseTheme.colors.white};

  .faq__header {
    margin-top: 40px;
  }
`;

export const StyledGreySection = styled(StyledSection)`
  background-color: ${baseTheme.colors.grey0};

  .actionHeader {
    margin-bottom: 10px;
  }

  ${StyledActionRowDescription} {
    margin: 0;
  }

  button {
    margin: 30px 10px;
  }

  .groupList {
    margin-top: 50px;
  }
`;

export const StyledSectionMobile = styled.div`
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${StyledInfoWrapper} {
    flex-direction: column;
  }

  ${StyledInfoPanelWrapper} {
    width: 100%;
    margin: 20px 0;
  }

  .showFullList {
    background-color: ${baseTheme.colors.grey0};
    background: linear-gradient(
      360deg,
      ${baseTheme.colors.grey0} 70%,
      ${baseTheme.colors.grey0} 10%
    );
    box-shadow: ${baseTheme.colors.grey0} 0px -5px 20px 20px;

    button {
      font-weight: ${FontWeight.Medium};
    }
  }
  ${StyledInfoPanelWrapper} {
    margin-top: 15px;
  }

  ${StyledActionRowDescription} {
    line-height: 25px;
  }

  .howTo__title {
    margin: 0 auto 30px auto;

    line-height: 28px;
  }
`;

export const StyledWhiteSectionMobile = styled(StyledSectionMobile)`
  box-sizing: border-box;
  background-color: ${baseTheme.colors.white};
  padding: 30px 20px;

  .faq__header {
    margin: 30px auto 20px auto;
    font-weight: ${FontWeight.Bold};
  }
`;

export const StyledGreySectionMobile = styled(StyledSectionMobile)`
  background-color: ${baseTheme.colors.grey0};
  padding: 30px 20px;

  .groupList {
    margin-top: 30px;
  }
`;

export const StyledSectionContent = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  ${CenteredFlexboxColumn}

  button {
    svg {
      margin-right: 5px;
    }

    .icn div {
      ${CenteredFlexboxColumn}
    }
  }
`;

export const StyledDesktopLandingPage = styled(StyledLandingPage)`
  box-sizing: border-box;
  background-color: ${baseTheme.colors.white};

  .header {
    max-width: 670px;
  }

  ${StyledAccordionItem} {
    width: 100%;
    max-width: 1030px;
  }

  ${StyledGroupInfoText}: {
    margin: 0;
  }

  ${StyledInfoWrapper} {
    margin-bottom: 40px;
  }

  .icn {
    margin-right: 10px;
  }
`;
