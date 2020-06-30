import React, {
  RefObject,
  MutableRefObject,
  FC,
  createRef,
  useRef,
} from 'react';

import {
  StyledProductInfoBlock,
  StyledH3,
  AlzaLinkWrapper,
} from './groupDialog.styles';
import AccordionList from '../../../../sharedComponents/organisms/AccordionList/AccordionList';
import { PriceLevels, PriceLevelsRefType } from '../priceLevelList/priceLevels';
import { DrawerFooter } from '../../../../sharedComponents/molecules/drawerFooter/drawerFooter';
import { ProductDetail } from '../../molecules/productDetail/productDetail';
import Button, {
  ButtonColor,
  ButtonWidth,
  ButtonTextAlign,
} from '../../../../sharedComponents/atoms/button/button';
import { UseSocialShoppingState } from '../../hooks/useSocialShoppingData';
import { InfoPanel } from '../../molecules/infoPanel/infoPanel';
import { getImageUrl } from '../../../../../utils/getImageUrl';
import { PriceCompareBlock } from '../../atoms/priceCompareBlock/priceCompareBlock';
import { PriceCompareBlockDirection } from '../../atoms/priceCompareBlock/priceCompareBlock';
import { PartlyBoldText } from '../../../../sharedComponents/atoms/partlyBoldText/partlyBoldText';
import {
  StyledContent,
  StyledH2,
  FAQWrapper,
  StyledText,
  InfoPanelsBlock,
  StyledTotalSavingsBlockMobile,
  StyledContentHeader,
} from './groupDialog.mobile.styles';
import { HowToType } from './groupDialog';
import IconSVG from '../../../../sharedComponents/atoms/iconSVG/iconSVG';
import { ReactSVG } from 'react-svg';
import { baseTheme } from '../../../../../utils/theme';
import AlzaText from '../../../../sharedComponents/atoms/alzaText/alzaText';
import AlzaLink from '../../../../sharedComponents/atoms/alzaLink/alzaLink';

type GroupDialogMobileProps = {
  addToBasket: () => void;
  selectedPriceLevelValue?: number;
  selectPriceLevelValue: (index: number) => void;
  socialShoppingData: UseSocialShoppingState;
  closeSocialShopping: () => void;
};

export const GroupDialogMobile: FC<GroupDialogMobileProps> = ({
  addToBasket,
  selectedPriceLevelValue,
  selectPriceLevelValue,
  socialShoppingData,
  closeSocialShopping,
}) => {
  const priceLevelsHeadingElement: RefObject<HTMLHeadingElement> = createRef();
  const priceLevelsElement: MutableRefObject<
    PriceLevelsRefType | undefined
  > = useRef();

  const handleButtonClicked = (): void => {
    if (selectedPriceLevelValue !== undefined) {
      addToBasket();
    } else {
      priceLevelsHeadingElement?.current?.scrollIntoView({
        behavior: 'smooth',
      });
      priceLevelsElement?.current?.highlightItems();
    }
  };

  const howToTexts: HowToType[] = socialShoppingData.data?.texts['howTo'];

  return (
    <StyledContent>
      <StyledContentHeader>
        <IconSVG
          src='Styles/images/svg/socialShopping/icon-socialShopping.svg'
          height={25}
          width={25}
        />
        <StyledH2>
          {socialShoppingData.data?.texts['productDetailTitle']}
        </StyledH2>
      </StyledContentHeader>
      <StyledText>
        {socialShoppingData.data?.texts['productDetailDescription']}
      </StyledText>
      <StyledH3 ref={priceLevelsHeadingElement}>
        <PartlyBoldText
          boldText={
            socialShoppingData.data?.texts['productDetailPriceLabelDecorated']
          }
          regularText={
            socialShoppingData.data?.texts['productDetailPriceLabel']
          }
        />
      </StyledH3>
      <PriceLevels
        priceLevels={socialShoppingData?.data?.priceLevels}
        selectPriceLevel={selectPriceLevelValue}
        selectedPriceLevelValue={selectedPriceLevelValue}
        ref={priceLevelsElement}
        testId='priceLevelsItem'
      />
      {selectedPriceLevelValue !== undefined && (
        <StyledTotalSavingsBlockMobile>
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
        </StyledTotalSavingsBlockMobile>
      )}
      <InfoPanelsBlock>
        <StyledH3>
          <PartlyBoldText
            boldText={socialShoppingData.data?.texts['howToTitleDecorated']}
            regularText={socialShoppingData.data?.texts['howToTitle']}
          />
        </StyledH3>
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
      <FAQWrapper>
        <input type='checkbox' id='faq-wrapper' />
        <label className='title' htmlFor='faq-wrapper'>
          {socialShoppingData.data?.texts['faqTitle']}
        </label>
        <div className='content'>
          <AccordionList
            items={socialShoppingData.data?.texts.faq.map(
              // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
              // @ts-ignore
              ({ question, answer }) => ({ title: question, content: answer })
            )}
          />
        </div>
      </FAQWrapper>
      <AlzaLinkWrapper>
        <AlzaLink
          text={
            socialShoppingData.data?.moreInfo?.name || 'Více o Sdílej a ušetři'
          }
          href={
            socialShoppingData.data?.moreInfo?.href ||
            'https://dev.alza.cz/art31632.htm'
          }
          newWindow={true}
        />
      </AlzaLinkWrapper>
      <DrawerFooter>
        <StyledProductInfoBlock>
          <ProductDetail
            imageUrl={socialShoppingData?.data?.img || ''}
            productUrl={socialShoppingData?.data?.productUrl || ''}
            name={socialShoppingData?.data?.name || ''}
            onClick={closeSocialShopping}
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
        </StyledProductInfoBlock>
        <Button
          color={
            selectedPriceLevelValue !== undefined
              ? ButtonColor.Green
              : ButtonColor.Blue
          }
          onClick={(): void => handleButtonClicked()}
          textAlign={ButtonTextAlign.Center}
          width={ButtonWidth.FullWidth}
        >
          {selectedPriceLevelValue !== undefined && (
            <ReactSVG
              src={getImageUrl('Styles/images/svg/shopping-cart.svg')}
              className='btn__icon'
            />
          )}
          {selectedPriceLevelValue !== undefined
            ? // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
              // @ts-ignore
              socialShoppingData.data?.priceLevels[0].onSubmit.name
            : socialShoppingData.data?.texts['productDetailPriceLabel']}
        </Button>
      </DrawerFooter>
    </StyledContent>
  );
};
