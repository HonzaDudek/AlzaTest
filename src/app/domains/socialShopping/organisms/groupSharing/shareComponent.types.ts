import { TFunction } from 'i18next';

/**
 * Type for social shopping share component.
 */
export type socialShoppingShareGroupType = {
  /**
   * Group hash
   */
  hash?: string;

  /**
   * Group size - number of users needed to get discount
   */
  groupSize: number;

  /**
   * Free capacity in the group.
   * Number of users left to fill group.
   */
  capacityLeft: number;

  /**
   * Capacity left text
   */
  capacityLeftText?: string;

  /**
   * Commodity
   */
  commodity: socialShoppingShareGroupCommodityType;

  sharingDialog?: {
    buttonText: string;
    dialogTitle: string;
    shareUrl: string;
    title: string;
  } | null;

  expirationDate?: string;
  texts?: {
    title?: string;
    description?: string;
    shareButton?: string;
    expirationDateText?: string;
  };
};

export type socialShoppingShareGroupCommodityType = {
  /**
   * Commodity id
   */
  id: number;

  /**
   * Commodity image url
   */
  img: string;

  /**
   * Commodity detail url
   */
  url: string;

  /**
   * Commodity name
   */
  name: string;

  /**
   * Original price of the commodity
   */
  originalPrice: string;

  /**
   * Discount price
   */
  discountPrice: string;

  /**
   * Price Difference
   */
  priceDifference: string;

  /**
   * Specification
   */
  specification?: string;
};

/**
 * Types in API response
 */
export type socialShoppingShareApiResponse = {
  orderId: number;
  groups: socialShoppingShareGroupApiResponse[];
  texts: { description: string; shareButton: string; title: string };
};

export type socialShoppingShareGroupApiResponse = {
  hash?: string;
  status: number;
  groupSize: number;
  capacityLeft: number;
  shareUrl: string;
  capacityLeftText: string;
  shareTitleText: string;
  commodity: socialShoppingShareGroupCommodityApiResponse;
  sharingDialog: {
    buttonText: string;
    dialogTitle: string;
    shareUrl: string;
    title: string;
  };
  expirationDate: string;
  texts: {
    expirationDateText: string;
  };
};

export type socialShoppingShareGroupCommodityApiResponse = {
  id: number;
  img: string;
  name: string;
  discountPrice: string;
  originalPrice: string;
  priceDifference: string;
  code: string;
  specification: string;
  url: string;
};

export const formatApiResponse = (
  translations: TFunction,
  data?: socialShoppingShareApiResponse
): socialShoppingShareGroupType[] => {
  const groups: socialShoppingShareGroupType[] = [];

  if (data?.groups) {
    data.groups.map(group => {
      const commodity: socialShoppingShareGroupCommodityType = {
        id: group.commodity.id,
        img: group.commodity.img,
        name: group.commodity.name,
        discountPrice: group.commodity.discountPrice,
        originalPrice: group.commodity.originalPrice,
        priceDifference: group.commodity.priceDifference,
        url: group.commodity.url,
        specification: group.commodity.specification,
      };

      groups.push({
        hash: group.hash,
        groupSize: group.groupSize,
        capacityLeft: group.capacityLeft,
        sharingDialog: group.sharingDialog,
        commodity: commodity,
        capacityLeftText: group.capacityLeftText,
        texts: {
          ...data.texts,
          expirationDateText: group.texts.expirationDateText,
        },
        expirationDate: group.expirationDate,
      });
    });
  }

  return groups;
};
