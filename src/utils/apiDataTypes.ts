// Types, that are used in React
export type PriceLevelType = {
  priceText: string;
  name: string;
  priceLabel: string;
  discountRate: string;
  totalPriceSaving: string;
  onSubmit: NamedAction;
  expirationDate?: number;
  expirationDateText?: string;
};

export type socialShoppingDataType = {
  id?: number;
  name?: string;
  code?: string;
  img?: string;
  discountPrice: string | null;
  priceDifference: string | null;
  originalPrice?: string;
  priceLevels?: PriceLevelType[] | null;
  productUrl: string;
  href?: string;
  texts?: any | null;
  moreInfo?: NamedAction | null;
};

// What we get from API
export type SocialShoppingCommodityDetailV1 = {
  self?: AppAction;
  id: number;
  img: string;
  discountPrice: string;
  priceDifference: string;
  originalPrice: string;
  name: string;
  specification?: string;
  priceLevels?: PriceLevelType[] | null;
  basketAction?: NamedAction | null;
  url: string;
  commodityDetailAction?: NamedAction | null;
  code?: string;
  texts?: any | null;
  moreInfo?: NamedAction | null;
};

export type HowTo = {
  description: string;
  decorated: string;
  image: string;
};

export type AppAction = {
  href?: string;
  appLink?: string;
  enabled?: boolean;
};
export type NamedAction = {
  href?: string;
  appLink?: string;
  name?: string;
  form?: FormV2;
  enabled?: boolean;
};
export type FormV2 = {
  method?: string;
  value: FormFieldV2[];
  isFormValid?: boolean;
  rel?: string[];
  href?: string;
};
export type FormFieldV2 = {
  name?: string;
  label?: string;
  value?: string | number | FormFieldV2[];
  options?: FormFieldOption[];
  readonly itemType?: string;
  readonly semanticItemType?: string;
  isHidden?: boolean;
  isRequired?: boolean;
  isValid?: boolean;
  max?: number;
  min?: number;
  rel?: string[];
  href?: string;
  readonly validationError?: string;
};
export type FormFieldOption = {
  label?: string;
  value?: string;
  isEnabled?: boolean;
  additionalInfo?: object;
};

export type SocialShoppingCommodityAccessories = {
  CommodityId: number;
  Count: number;
  Services: number[];
  Hooks: number[];
};
