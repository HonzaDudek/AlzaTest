import styled from 'styled-components';
import React from 'react';
import { ReactSVG } from 'react-svg';
import {
  baseTheme,
  FontWeight,
  Font,
  Borders,
} from '../../../../../utils/theme';
import { buttonIcon, customOrderListIndex } from '../../../../../utils/mixins';
import { StyledProductInfoBlock } from './groupDialog.styles';
import { InfoPanelType } from '../../molecules/infoPanel/infoPanel';
import { StyledInfoPanelWrapper } from '../../molecules/infoPanel/infoPanel.styles';
import { StyledSocialShoppingProductDetail } from '../../molecules/productDetail/productDetail';
import { StyledComparePriceBlock } from '../../atoms/priceCompareBlock/priceCompareBlock.styles';

export const StyledProductInfoBlockDesktop = styled(StyledProductInfoBlock)`
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid ${baseTheme.colors.grey3};
  height: 100px;

  ${StyledSocialShoppingProductDetail} {
    img {
      width: 70px;
      height: 70px;
    }

    .productDetail--name {
      margin-right: 5px;
    }
  }
  ${StyledComparePriceBlock} {
    min-width: 100px;
  }
`;

export const StyledDesktopContent = styled.div`
  font-family: ${Font.primary};
  display: flex;
  min-width: 950px;
`;

export const LeftSide = styled.div`
  padding: 30px;
  width: 50%;
`;

export const StyledHeadingBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledH2 = styled.h2`
  color: ${baseTheme.colors.blueSecondary};
  display: block;
  line-height: 24px;
  font-size: 32px;
  padding: 0;
  margin-left: 10px;
  margin-bottom: 15px;
  margin-top: 10px;
  font-weight: ${FontWeight.Medium};
`;

export const StyledText = styled.p`
  color: ${baseTheme.colors.dark1};
  line-height: 22px;
  font-size: 14px;
  width: 75%;
  font-weight: ${FontWeight.Regular};
`;

export const InfoPanelsBlock = styled.div``;

export const InfoPanel: React.FC<InfoPanelType> = props => {
  return (
    <StyledInfoPanel>
      <div className='index'>{props.index}</div>
      <ReactSVG
        src={props.icon ? props.icon : ''}
        beforeInjection={(svg: SVGElement): void => {
          svg.classList.add('infoPanel__Icon');
          svg.setAttribute('style', 'width: 72px');
          svg.setAttribute('style', 'height: 41px');
        }}
      />
      <p>{props.children}</p>
    </StyledInfoPanel>
  );
};

const StyledInfoPanel = styled(StyledInfoPanelWrapper)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  box-shadow: none;
  padding: 0;
  margin: 30px 0 30px 0;

  .index {
    ${customOrderListIndex};
    position: inherit;
    background-color: ${baseTheme.colors.blueSecondary};
    max-width: 33px;
    max-height: 33px;
    margin-right: 25px;
  }

  .infoPanel__Icon {
    flex-shrink: 0;
    margin-right: 25px;
    min-width: 80px;
  }

  p {
    margin: 0;
    width: 75%;
    text-align: left;
    line-height: 22px;
    font-size: 14px;
    font-weight: ${FontWeight.Regular};
    color: ${baseTheme.colors.dark1};
  }

  &:last-of-type {
    margin-bottom: 100px;
  }
`;

export const ControlsBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: auto;
  width: 100%;

  button {
    margin-right: 10px;

    &:last-of-type {
      margin-right: 0;
    }
  }

  .btn__icon {
    ${buttonIcon}
  }
`;

export const StyledTotalSavingsBlock = styled.div`
  box-sizing: border-box;
  border-radius: ${Borders.defaultBorderRadius};
  background: ${baseTheme.colors.transparent};
  font-family: ${Font.primary};
  font-size: 14px;
  font-weight: ${FontWeight.Regular};
  line-height: 22px;
  color: ${baseTheme.colors.bluePrimary};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  letter-spacing: 1px;

  .infoText {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    color: ${baseTheme.colors.greenPrimary};
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  padding: 30px;
  background-color: ${baseTheme.colors.grey0};

  ${StyledTotalSavingsBlock} {
    margin: 20px;
  }
`;
