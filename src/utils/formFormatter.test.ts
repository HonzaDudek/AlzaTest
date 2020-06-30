import { UPDATED_MOCK_DATA } from '../app/domains/socialShopping/organisms/groupDialog/groupDialogMockData';

import { formatApiResponse, formatFormFieldV2 } from './formFormatter';
import { FormFieldV2, PriceLevelType } from './apiDataTypes';

describe('formatSocialShoppingAPIResponse', () => {
  test('formatDiscountTypeValues', () => {
    UPDATED_MOCK_DATA.priceLevels?.forEach(
      (priceLevel: PriceLevelType, index: number) => {
        if (index === 1) {
          const output = formatFormFieldV2(
            priceLevel.onSubmit?.form?.value as FormFieldV2[]
          );
          expect(output).toEqual({
            commodityId: 5443532,
            count: 0,
            hooks: undefined,
            levelId: 2,
            services: undefined,
          });
        }
      }
    );
  });

  test('formatDiscountTypeValues', () => {
    UPDATED_MOCK_DATA.priceLevels?.forEach(
      (priceLevel: PriceLevelType, index: number) => {
        if (index === 1) {
          const output = formatFormFieldV2(
            priceLevel.onSubmit?.form?.value as FormFieldV2[]
          );
          expect(output).toEqual({
            commodityId: 5443532,
            count: 0,
            hooks: undefined,
            levelId: 2,
            services: undefined,
          });
        }
      }
    );
  });

  test('formatApiResponse', () => {
    const output = formatApiResponse(UPDATED_MOCK_DATA);
    expect(output).toEqual({
      code: undefined,
      href: undefined,
      id: 5443532,
      img: 'https://i.alza.cz/Foto/f6/AL/ALUFI677.jpg',
      name: 'BRITA Aluna bílá Starter Pack 3',
      originalPrice: '549,-',
      priceDifference: null,
      discountPrice: '549,-',
      priceLevels: [
        {
          discountRate: '-18%',
          name: 'Bude nás 5',
          onSubmit: {
            appLink: 'basketAdd',
            form: {
              href:
                'https://mlegolas.alza.cz/api/basket/v1/socialShoppingItems',
              rel: ['form'],
              value: [
                {
                  isHidden: true,
                  itemType: 'integer',
                  name: 'commodityId',
                  value: 5443532,
                },
                {
                  isHidden: true,
                  itemType: 'decimal',
                  name: 'count',
                  value: 0,
                },
                { isHidden: true, itemType: 'set', name: 'services' },
                { isHidden: true, itemType: 'set', name: 'hooks' },
                {
                  isHidden: true,
                  itemType: 'integer',
                  label: 'levelId',
                  name: 'levelId',
                  value: 1,
                },
              ],
            },
            name: 'Vložit do košíku',
          },
          priceLabel: 'sleva 100,- pro každého',
          priceText: '449,-',
        },
        {
          discountRate: '-36%',
          name: 'Bude nás 10',
          onSubmit: {
            appLink: 'basketAdd',
            form: {
              href:
                'https://mlegolas.alza.cz/api/basket/v1/socialShoppingItems',
              rel: ['form'],
              value: [
                {
                  isHidden: true,
                  itemType: 'integer',
                  name: 'commodityId',
                  value: 5443532,
                },
                {
                  isHidden: true,
                  itemType: 'decimal',
                  name: 'count',
                  value: 0,
                },
                { isHidden: true, itemType: 'set', name: 'services' },
                { isHidden: true, itemType: 'set', name: 'hooks' },
                {
                  isHidden: true,
                  itemType: 'integer',
                  label: 'levelId',
                  name: 'levelId',
                  value: 2,
                },
              ],
            },
            name: 'Vložit do košíku',
          },
          priceLabel: 'sleva 200,- pro každého',
          priceText: '349,-',
        },
        {
          discountRate: '-55%',
          name: 'Bude nás 15',
          onSubmit: {
            appLink: 'basketAdd',
            form: {
              href:
                'https://mlegolas.alza.cz/api/basket/v1/socialShoppingItems',
              rel: ['form'],
              value: [
                {
                  isHidden: true,
                  itemType: 'integer',
                  name: 'commodityId',
                  value: 5443532,
                },
                {
                  isHidden: true,
                  itemType: 'decimal',
                  name: 'count',
                  value: 0,
                },
                { isHidden: true, itemType: 'set', name: 'services' },
                { isHidden: true, itemType: 'set', name: 'hooks' },
                {
                  isHidden: true,
                  itemType: 'integer',
                  label: 'levelId',
                  name: 'levelId',
                  value: 3,
                },
              ],
            },
            name: 'Vložit do košíku',
          },
          priceLabel: 'sleva 300,- pro každého',
          priceText: '249,-',
        },
      ],
      productUrl:
        'http://localhost/brita-aluna-bila-starter-pack-3ks-filtru-d5443532.htm',
      texts: undefined,
      moreInfo: {
        href: 'https://dev.alza.cz/art31632.htm',
        appLink: 'article',
        name: 'Více o Sdílej a ušetři',
      },
    });
  });
});
