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
  StyledPriceAndAvailability,
  StyledProductCard,
  StyledProductCardDescription,
  StyledProductCardImage,
} from './productCard.styles';
import MoreLink from '../../atoms/moreLink/moreLink';
import { SocialShoppingCommodityDetailV1 as CommodityDetail } from '../../../../../utils/apiDataTypes';
import { PartlyBoldText } from '../../../../sharedComponents/atoms/partlyBoldText/partlyBoldText';
import { GetInfoIcons } from './productCard.mobile';

export type ProductCardProps = {
  title: {
    regular: string;
    bold?: string;
  };
  headingLevel?: number;
  productDetail: Partial<CommodityDetail>;
  type: ProductCardType;
  availability: {
    availabilityText: string;
    isProductAvailable: boolean;
  };
  moreInfoText?: string;
  displayPrice?: boolean;
  iconTexts?: { [key: string]: string };
};

export enum ProductCardType {
  LandingPage = 'landingPage',
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  productDetail,
  type,
  availability,
  displayPrice = true,
  moreInfoText = 'Více o zboží',
  iconTexts,
}) => {
  return (
    <StyledProductCard className={type}>
      <StyledProductCardDescription>
        <AlzaText
          size='35px'
          color={baseTheme.sectionColors.greyAutoMoto}
          className='commonTitle'
        >
          <PartlyBoldText
            boldText={title?.bold ?? ''}
            regularText={title?.regular}
          />
        </AlzaText>
        <AlzaText color={baseTheme.colors.bluePrimary} className='productName'>
          <a href={productDetail.url}>{productDetail.name}</a>
        </AlzaText>
        <AlzaText tag={AlzaTextTag.Paragraph} className='description'>
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
    </StyledProductCard>
  );
};

export default ProductCard;
