import React, { MutableRefObject, useRef } from 'react';

import Button, {
  ButtonColor,
  ButtonWidth,
  ButtonTextAlign,
} from '../../../../sharedComponents/atoms/button/button';
import { PriceLevels, PriceLevelsRefType } from '../priceLevelList/priceLevels';
import { ProductDetail } from '../../molecules/productDetail/productDetail';
import { getImageUrl } from '../../../../../utils/getImageUrl';
import {
  PriceCompareBlock,
  PriceCompareBlockDirection,
} from '../../atoms/priceCompareBlock/priceCompareBlock';
import { UseSocialShoppingState } from '../../hooks/useSocialShoppingData';
import { PartlyBoldText } from '../../../../sharedComponents/atoms/partlyBoldText/partlyBoldText';
import { HowToType } from './groupDialog';
import {
  StyledDesktopContent,
  LeftSide,
  StyledHeadingBlock,
  StyledH2,
  StyledText,
  InfoPanelsBlock,
  InfoPanel,
  RightSide,
  StyledProductInfoBlockDesktop,
  ControlsBlock,
  StyledTotalSavingsBlock,
} from './groupDialog.desktop.styles';
import IconSVG from '../../../../sharedComponents/atoms/iconSVG/iconSVG';
import { ClickableWrapper } from '../../../../sharedComponents/atoms/clickableWrapper/clickableWrapper';
import { baseTheme } from '../../../../../utils/theme';
import AlzaText from '../../../../sharedComponents/atoms/alzaText/alzaText';
import AlzaLink from '../../../../sharedComponents/atoms/alzaLink/alzaLink';
import { AlzaLinkWrapper } from './groupDialog.styles';

type GroupDialogDesktopProps = {
  addToBasket: () => void;
  closeSocialShopping: () => void;
  selectedPriceLevelValue?: number;
  selectPriceLevelValue: (index: number) => void;
  socialShoppingData: UseSocialShoppingState;
};

export const GroupDialogDesktop: React.FC<GroupDialogDesktopProps> = ({
  addToBasket,
  closeSocialShopping,
  selectedPriceLevelValue,
  selectPriceLevelValue,
  socialShoppingData,
}) => {
  const priceLevelsElement: MutableRefObject<
    PriceLevelsRefType | undefined
  > = useRef();

  const handleCancelButtonClicked = (): void => {
    closeSocialShopping();
  };

  const handleSubmitButtonClicked = (): void => {
    addToBasket();
  };

  const handleDisabledSubmitButtonClicked = (): void => {
    priceLevelsElement?.current?.highlightItems();
  };

  const howToTexts: HowToType[] = socialShoppingData.data?.texts.howTo;

  return (
    <StyledDesktopContent>
      <LeftSide>
        <StyledHeadingBlock>
          <IconSVG
            src={getImageUrl(
              'Styles/images/svg/socialShopping/icon-socialShopping.svg'
            )}
            className={'ico__socialShopping'}
          />
          <StyledH2>
            {socialShoppingData.data?.texts['productDetailTitle']}
          </StyledH2>
        </StyledHeadingBlock>
        <StyledText>
          {socialShoppingData.data?.texts['productDetailDescription']}
        </StyledText>
        <InfoPanelsBlock>
          {howToTexts.map((howTo, index) => {
            return (
              <InfoPanel index={index + 1} icon={howTo.image} key={index}>
                {
                  <PartlyBoldText
                    boldText={howTo.decorated}
                    regularText={howTo.description}
                  />
                }
              </InfoPanel>
            );
          })}
        </InfoPanelsBlock>
        <AlzaLinkWrapper>
          <AlzaLink
            text={
              socialShoppingData.data?.moreInfo?.name ||
              'Více o Sdílej a ušetři'
            }
            href={
              socialShoppingData.data?.moreInfo?.href ||
              'https://dev.alza.cz/art31632.htm'
            }
            newWindow={true}
          />
        </AlzaLinkWrapper>
      </LeftSide>
      <RightSide>
        <StyledProductInfoBlockDesktop>
          <ProductDetail
            imageUrl={socialShoppingData?.data?.img || ''}
            productUrl={socialShoppingData?.data?.productUrl || ''}
            name={socialShoppingData?.data?.name || ''}
            onClick={handleCancelButtonClicked}
          />
          <PriceCompareBlock
            direction={PriceCompareBlockDirection.Vertical}
            originalPrice={socialShoppingData.data?.originalPrice}
            actualPrice={
              socialShoppingData?.data?.priceLevels &&
              selectedPriceLevelValue !== undefined
                ? socialShoppingData?.data?.priceLevels[selectedPriceLevelValue]
                    .priceText
                : socialShoppingData.data?.discountPrice
            }
            data-testid='priceCompareBlock'
          />
        </StyledProductInfoBlockDesktop>
        <PriceLevels
          priceLevels={socialShoppingData?.data?.priceLevels}
          selectPriceLevel={selectPriceLevelValue}
          selectedPriceLevelValue={selectedPriceLevelValue}
          ref={priceLevelsElement}
        />
        {selectedPriceLevelValue !== undefined && (
          <StyledTotalSavingsBlock>
            {socialShoppingData?.data?.priceLevels?.[selectedPriceLevelValue]
              .expirationDateText && (
              <AlzaText
                size='14px'
                color={baseTheme.colors.grey5}
                centered={true}
              >
                {
                  socialShoppingData.data.priceLevels[selectedPriceLevelValue]
                    .expirationDateText
                }
              </AlzaText>
            )}
            <div className='infoText'>
              {
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                socialShoppingData.data.priceLevels[selectedPriceLevelValue]
                  .totalPriceSaving
              }
            </div>
          </StyledTotalSavingsBlock>
        )}

        <ControlsBlock>
          <Button
            color={ButtonColor.Grey}
            textAlign={ButtonTextAlign.Center}
            onClick={handleCancelButtonClicked}
            width={ButtonWidth.Inline}
          >
            {socialShoppingData.data?.texts['closeButtonText'] ?? 'Zrušit'}
          </Button>
          <ClickableWrapper
            onClick={handleDisabledSubmitButtonClicked}
            clickable={selectedPriceLevelValue === undefined}
          >
            <Button
              color={ButtonColor.Green}
              disabled={selectedPriceLevelValue === undefined}
              onClick={handleSubmitButtonClicked}
              textAlign={ButtonTextAlign.Center}
              width={ButtonWidth.Inline}
            >
              <IconSVG
                src='Styles/images/svg/shopping-cart.svg'
                className={'btn__icon'}
              />
              {socialShoppingData.data?.priceLevels
                ? socialShoppingData.data?.priceLevels[0]?.onSubmit.name
                : 'Vložit do košíku'}
            </Button>
          </ClickableWrapper>
        </ControlsBlock>
      </RightSide>
    </StyledDesktopContent>
  );
};
