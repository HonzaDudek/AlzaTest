export const mockAddToBasketAction = {
  addToBasketAction: {
    appLink: 'basketAdd',
    name: 'Koupit',
    form: {
      value: [
        {
          name: 'items',
          value: [
            {
              value: [
                {
                  name: 'commodityId',
                  value: 5458864,
                  itemType: 'integer',
                  isHidden: true,
                },
                {
                  name: 'count',
                  value: 1.0,
                  itemType: 'decimal',
                  isHidden: true,
                },
                { name: 'pricePerItem', itemType: 'decimal', isHidden: true },
                {
                  name: 'services',
                  value: [],
                  itemType: 'set',
                  isHidden: true,
                },
                { name: 'hooks', value: [], itemType: 'set', isHidden: true },
              ],
              rel: ['form'],
              href: 'https://malfa.alza.cz',
            },
          ],
          itemType: 'objectArray',
          isHidden: true,
        },
      ],
      rel: ['form'],
      href: 'https://malfa.alza.cz/api/basket/v1/items',
    },
  },
};

export const addBasketActionMockData = {
  addBasketAction: {
    appLink: 'basketAdd',
    name: 'Připojit se a získat slevu 699,- Kč',
    form: {
      value: [
        {
          name: 'commodityId',
          value: 5442246,
          itemType: 'integer',
          isHidden: true,
        },
        {
          name: 'count',
          value: 1,
          itemType: 'decimal',
          isHidden: true,
        },
        {
          name: 'services',
          value: [],
          itemType: 'set',
          isHidden: true,
        },
        {
          name: 'hooks',
          value: [],
          itemType: 'set',
          isHidden: true,
        },
        {
          name: 'levelId',
          label: 'levelId',
          itemType: 'integer',
          isHidden: true,
        },
        {
          name: 'groupId',
          label: 'groupId',
          value: 0,
          itemType: 'integer',
          isHidden: true,
        },
      ],
      rel: ['form'],
      href: 'https://legolas.alza.cz/api/bakset/v1/socialShoppingItems',
    },
  },
};

export const mockAddToBasketActionRequestBody = {
  CommodityId: 5458864,
  Count: 1,
  Services: [],
  Hooks: [],
};

export const mockAddBasketActionRequestBody = {
  CommodityId: 5442246,
  Count: 1,
  Services: [],
  Hooks: [],
  GroupId: 0,
};
