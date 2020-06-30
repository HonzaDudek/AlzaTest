import React from 'react';
import CSSClasses from './productCard.module.scss';
import {
  PriceCompareBlock,
  PriceCompareBlockDirection,
} from '../../atoms/priceCompareBlock/priceCompareBlock';
import AlzaText, {
  AlzaTextTag,
} from '../../../../sharedComponents/atoms/alzaText/alzaText';
import { baseTheme } from '../../../../../utils/theme';
import {
  StyledIconBubble,
  StyledMobileProductCard,
  StyledPriceAndAvailability,
  StyledProductCardDescription,
  StyledProductCardImage,
  StyledRedInfoBubble,
} from './productCard.styles';
import MoreLink from '../../atoms/moreLink/moreLink';
import { ProductCardProps } from './productCard';
import { PartlyBoldText } from '../../../../sharedComponents/atoms/partlyBoldText/partlyBoldText';
import IconSVG from '../../../../sharedComponents/atoms/iconSVG/iconSVG';
import { getImageUrl } from '../../../../../utils/getImageUrl';

export const GetInfoIcons = (iconTexts: {
  [key: string]: string | undefined;
}): React.ReactNode => {
  const UpperBubbleContent = (
    <>
      <IconSVG
        src={getImageUrl(
          'Styles/images/svg/socialShopping/icon-socialShopping.svg'
        )}
        className='bubble__icon'
      />
      <AlzaText
        centered={true}
        size='12px'
        color={baseTheme.colors.blueSecondary}
        className='bubble__text'
      >
        {iconTexts['shareAndSaveLabel']}
      </AlzaText>
    </>
  );

  const LowerBubbleContent = (
    <AlzaText centered={true} size={'14px'} color={baseTheme.colors.white}>
      {iconTexts['saleLabel']}
    </AlzaText>
  );

  return (
    <>
      {iconTexts['shareAndSaveLabel'] && (
        <StyledIconBubble>{UpperBubbleContent}</StyledIconBubble>
      )}
      {iconTexts['saleLabel'] && (
        <StyledRedInfoBubble>{LowerBubbleContent}</StyledRedInfoBubble>
      )}
    </>
  );
};

const ProductCardMobile: React.FC<ProductCardProps> = ({
  title,
  productDetail,
  type,
  availability,
  displayPrice = true,
  moreInfoText = 'Více o zboží',
  iconTexts,
}: ProductCardProps) => {
  return (
    <StyledMobileProductCard className={type}>
      <AlzaText
        size='24px'
        color={baseTheme.sectionColors.greyAutoMoto}
        className='commonTitle'
      >
        <PartlyBoldText
          boldText={title?.bold ?? ''}
          regularText={title?.regular}
        />
      </AlzaText>
      <StyledProductCardImage>
        <a href={productDetail.url}>
          <img
            className={CSSClasses.image}
            src={productDetail.img}
            alt={productDetail.name}
          />
        </a>
        {iconTexts && GetInfoIcons(iconTexts)}
      </StyledProductCardImage>
      <StyledProductCardDescription>
        <AlzaText
          color={baseTheme.colors.bluePrimary}
          className='productName'
          centered={true}
        >
          <a href={productDetail.url}>{productDetail.name}</a>
        </AlzaText>
        <AlzaText
          tag={AlzaTextTag.Paragraph}
          className='description'
          centered={true}
          lineHeight='21px'
        >
          {productDetail.specification}{' '}
          <MoreLink
            linkHref={productDetail.url ?? '#'}
            linkText={moreInfoText}
          />
        </AlzaText>
        <StyledPriceAndAvailability
          isProductAvailable={availability.isProductAvailable}
        >
          {displayPrice && (
            <PriceCompareBlock
              originalPrice={productDetail.originalPrice}
              actualPrice={productDetail.discountPrice}
              direction={PriceCompareBlockDirection.Horizontal}
            />
          )}
          {availability.availabilityText && (
            <span className='availability'>
              <strong>{availability.availabilityText}</strong>
            </span>
          )}
        </StyledPriceAndAvailability>
      </StyledProductCardDescription>
    </StyledMobileProductCard>
  );
};

export default ProductCardMobile;
