import React from 'react';
import styled from 'styled-components';
import AlzaHeading, {
  AlzaHeadingColor,
} from '../../../../sharedComponents/atoms/alzaHeading/alzaHeading';
import Button, {
  ButtonColor,
  ButtonSize,
  ButtonWidth,
} from '../../../../sharedComponents/atoms/button/button';
import { baseTheme, Borders, Font } from '../../../../../utils/theme';
import IconSVG from '../../../../sharedComponents/atoms/iconSVG/iconSVG';
import { shakeHorizontalAnimation } from '../../../../../utils/animations/shakeAnimation';
import { DetailPagePopupProps } from './detailPagePopup.type';

const StyledDetailPagePopup = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 300px;
  height: 180px;
  padding: 20px;
  z-index: 250;
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

  .crossIcon {
    position: absolute;
    top: 10px;
    right: 10px;

    path {
      fill: ${baseTheme.colors.grey3};
      stroke: ${baseTheme.colors.grey3};
    }

    &:hover {
      cursor: pointer;
    }
  }

  button {
    width: fit-content;
    font-weight: bold;
    outline: none;
  }

  &:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 15px 0 15px 15px;
    border-color: transparent transparent transparent #3daeee;
    line-height: 0;
    _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');
    position: absolute;
    right: -15px;
    top: 75px;
  }
`;

const StyledPopoverHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h4 {
    margin: 0;
    // It had to be done, because it was being overridden by CSS from template in Trendy
    color: ${baseTheme.colors.white} !important;
  }

  div {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    margin-right: 10px;
    padding: 5px;
    background: ${baseTheme.colors.redPrice};
    color: ${baseTheme.colors.white};
    border-radius: ${Borders.defaultBorderRadius};
  }
`;

const StyledPopoverBodyText = styled.div`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.25px;
`;

export const DetailPagePopupDesktop: React.FC<DetailPagePopupProps> = props => {
  return (
    <StyledDetailPagePopup>
      <IconSVG
        src={'/Styles/images/svg/f-cross.svg'}
        onClick={props.setIsOpen}
        className='crossIcon'
        width={15}
        height={15}
      />
      <StyledPopoverHeader>
        <div>{props.popoverTexts?.spanText}</div>
        <AlzaHeading level={4} color={AlzaHeadingColor.White} centered={true}>
          {props.popoverTexts?.headerText}
        </AlzaHeading>
      </StyledPopoverHeader>
      <StyledPopoverBodyText>
        {props.popoverTexts?.bodyText}
      </StyledPopoverBodyText>
      <Button
        color={ButtonColor.Grey}
        onClick={props.setIsOpen}
        size={ButtonSize.Small}
        width={ButtonWidth.Inline}
      >
        {props.popoverTexts?.buttonText}
      </Button>
    </StyledDetailPagePopup>
  );
};

export default DetailPagePopupDesktop;
