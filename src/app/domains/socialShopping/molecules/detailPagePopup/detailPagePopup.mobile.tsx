import React from 'react';
import styled from 'styled-components';
import AlzaHeading, {
  AlzaHeadingColor,
} from '../../../../sharedComponents/atoms/alzaHeading/alzaHeading';
import {
  baseTheme,
  Borders,
  Font,
  FontWeight,
} from '../../../../../utils/theme';
import IconSVG from '../../../../sharedComponents/atoms/iconSVG/iconSVG';
import {
  shakeHorizontalAnimation,
  shakeVerticalAnimation,
} from '../../../../../utils/animations/shakeAnimation';
import { DetailPagePopupProps } from './detailPagePopup.type';
import AlzaText from '../../../../sharedComponents/atoms/alzaText/alzaText';
import { CenteredFlexboxRow } from '../../../../../utils/mixins';

const StyledPopoverHeader = styled.div`
  ${CenteredFlexboxRow}

  h6 {
    margin: 0;
    // It had to be done, because it was being overridden by CSS from template in Trendy
    color: ${baseTheme.colors.white} !important;
    font-weight: ${FontWeight.Medium};
  }
`;

const StyledDetailPagePopupMobile = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  width: 85%;
  height: 85px;
  top: 25px;
  margin: auto;
  align-items: center;
  z-index: 90;

  flex-direction: column;
  justify-content: space-between;

  padding: 15px 10px;
  font-family: ${Font.primary};
  background: linear-gradient(
    136deg,
    ${baseTheme.colors.blueSecondary},
    ${baseTheme.colors.blueSecondary},
    #6dc3f4
  );
  border-radius: ${Borders.defaultBorderRadius};
  color: ${baseTheme.colors.white};
  animation: ${shakeHorizontalAnimation};

  h6 {
    margin: 0;
    padding: 0;
    font-size: 13px;
    font-weight: ${FontWeight.Medium};
  }

  p {
    margin: 0;
    line-height: 16px;
    letter-spacing: 0.43px;
    font-weight: ${FontWeight.Regular};
  }

  animation: ${shakeVerticalAnimation};

  .crossIcon {
    position: absolute;
    top: 5px;
    right: 5px;

    path {
      fill: ${baseTheme.colors.white};
    }
  }

  &:after {
    content: '';
    position: absolute;
    right: -15px;
    top: 85px;
    left: calc(50% - 3px);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 6px 6px;
    border-color: #3ca6ec transparent transparent transparent;
    line-height: 0;
    _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');
  }
`;

export const DetailPagePopupMobile: React.FC<DetailPagePopupProps> = props => {
  return (
    <StyledDetailPagePopupMobile>
      <IconSVG
        src={'/Styles/images/svg/f-cross.svg'}
        onClick={props.setIsOpen}
        className='crossIcon'
        width={20}
        height={20}
      />
      <StyledPopoverHeader>
        <AlzaHeading level={6} color={AlzaHeadingColor.White}>
          {props.popoverTexts?.headerText}
        </AlzaHeading>
      </StyledPopoverHeader>
      <AlzaText centered={true} size='12px' color={baseTheme.colors.white}>
        {props.popoverTexts?.bodyText}
      </AlzaText>
    </StyledDetailPagePopupMobile>
  );
};

export default DetailPagePopupMobile;
