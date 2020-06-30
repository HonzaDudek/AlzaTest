import {
  FormFieldV2,
  SocialShoppingCommodityDetailV1,
  socialShoppingDataType,
} from './apiDataTypes';

/**
 * returns: {
 *  commodityId: number;
    count: number;
    pricePerItem: number;
    priceText: string;
    services: string[];
    hooks: string[];
    levelId: number;
    label: string;
    priceLabel: string;
    discountRate: string;
 * }
 * @param formFieldV2Value
 */
export const formatFormFieldV2 = (
  formFieldV2Value: FormFieldV2[]
): FormattedHateoasFormType => {
  const formattedValue: FormattedHateoasFormType = {} as FormattedHateoasFormType;
  formFieldV2Value.forEach(originalValue => {
    const name = originalValue.name;
    const value = originalValue.value;
    const result: { [key: string]: string | number | object | undefined } = {};
    result[name || 0] = value;
    Object.assign(formattedValue, result);
  });
  return formattedValue;
};

type FormattedHateoasFormType = {
  [key: string]: string | number | object | undefined;
};

export const formatFormV2 = (
  formFieldV2Value: FormFieldV2[]
): FormattedHateoasFormType => {
  const formattedValue: FormattedHateoasFormType = {} as FormattedHateoasFormType;
  formFieldV2Value?.forEach(formFieldValue => {
    if (
      formFieldValue.itemType === 'objectArray' &&
      !Array.isArray(formFieldValue.value)
    ) {
      throw new Error(
        'Form value itemType is declared as objectArray, but different type is passed as value'
      );
    } else if (
      formFieldValue.itemType === 'objectArray' &&
      Array.isArray(formFieldValue.value)
    ) {
      formFieldValue.value.forEach(value => {
        if (value.value !== undefined) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          Object.assign(formattedValue, {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            [formFieldValue.name]: [formatFormV2(value.value)],
          });
        }
      });
    } else {
      if (formFieldValue.value !== undefined) {
        const name = formFieldValue.name;
        const value = formFieldValue.value;
        const result: FormattedHateoasFormType = {};
        result[name || 0] = value;
        Object.assign(formattedValue, result);
      }
    }
  });
  return formattedValue;
};

export const formatApiResponse = (
  SocialShoppingAPIResponse: SocialShoppingCommodityDetailV1
): socialShoppingDataType => {
  const response = SocialShoppingAPIResponse;
  return {
    id: response.id,
    name: response.name,
    code: response.code,
    img: response.img,
    originalPrice: response.originalPrice,
    discountPrice: response.discountPrice,
    priceDifference: response.priceDifference,
    priceLevels: response.priceLevels,
    productUrl: window.location.origin + response.url,
    href: response.basketAction?.form?.href,
    texts: response.texts,
    moreInfo: response.moreInfo,
  };
};
