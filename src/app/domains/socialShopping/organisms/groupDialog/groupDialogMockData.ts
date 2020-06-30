import { SocialShoppingCommodityDetailV1 } from '../../../../../utils/apiDataTypes';

export const UPDATED_MOCK_DATA: SocialShoppingCommodityDetailV1 = JSON.parse(`
{
  "self": {
      "href": "https://mlegolas.alza.cz/api/socialShopping/v1/commodities/5443532",
      "appLink": "socialShoppingProduct"
  },
  "id": 5443532,
  "img": "https://i.alza.cz/Foto/f6/AL/ALUFI677.jpg",
  "discountPrice": "549,-",
  "priceDifference": null,
  "originalPrice": "549,-",
  "name": "BRITA Aluna bílá Starter Pack 3",
  "specification": "Filtrační konvice celkový objem 2,4 l,  objem přefiltrované vody 1,4 l,  mechanický indikátor výměny filtru,  vhodné do myčky,  počet filtračních patron v balení 3 ks ",
  "priceLevels": [
      {
          "priceText": "449,-",
          "name": "Bude nás 5",
          "priceLabel": "sleva 100,- pro každého",
          "discountRate": "-18%",
          "onSubmit": {
              "appLink": "basketAdd",
              "name": "Vložit do košíku",
              "form": {
                  "value": [
                      {
                          "name": "commodityId",
                          "value": 5443532,
                          "itemType": "integer",
                          "isHidden": true
                      },
                      {
                          "name": "count",
                          "value": 0.0,
                          "itemType": "decimal",
                          "isHidden": true
                      },
                      {
                          "name": "services",
                          "itemType": "set",
                          "isHidden": true
                      },
                      {
                          "name": "hooks",
                          "itemType": "set",
                          "isHidden": true
                      },
                      {
                          "name": "levelId",
                          "label": "levelId",
                          "value": 1,
                          "itemType": "integer",
                          "isHidden": true
                      }
                  ],
                  "rel": [
                      "form"
                  ],
                  "href": "https://mlegolas.alza.cz/api/basket/v1/socialShoppingItems"
              }
          }
      },
      {
          "priceText": "349,-",
          "name": "Bude nás 10",
          "priceLabel": "sleva 200,- pro každého",
          "discountRate": "-36%",
          "onSubmit": {
              "appLink": "basketAdd",
              "name": "Vložit do košíku",
              "form": {
                  "value": [
                      {
                          "name": "commodityId",
                          "value": 5443532,
                          "itemType": "integer",
                          "isHidden": true
                      },
                      {
                          "name": "count",
                          "value": 0.0,
                          "itemType": "decimal",
                          "isHidden": true
                      },
                      {
                          "name": "services",
                          "itemType": "set",
                          "isHidden": true
                      },
                      {
                          "name": "hooks",
                          "itemType": "set",
                          "isHidden": true
                      },
                      {
                          "name": "levelId",
                          "label": "levelId",
                          "value": 2,
                          "itemType": "integer",
                          "isHidden": true
                      }
                  ],
                  "rel": [
                      "form"
                  ],
                  "href": "https://mlegolas.alza.cz/api/basket/v1/socialShoppingItems"
              }
          }
      },
      {
          "priceText": "249,-",
          "name": "Bude nás 15",
          "priceLabel": "sleva 300,- pro každého",
          "discountRate": "-55%",
          "onSubmit": {
              "appLink": "basketAdd",
              "name": "Vložit do košíku",
              "form": {
                  "value": [
                      {
                          "name": "commodityId",
                          "value": 5443532,
                          "itemType": "integer",
                          "isHidden": true
                      },
                      {
                          "name": "count",
                          "value": 0.0,
                          "itemType": "decimal",
                          "isHidden": true
                      },
                      {
                          "name": "services",
                          "itemType": "set",
                          "isHidden": true
                      },
                      {
                          "name": "hooks",
                          "itemType": "set",
                          "isHidden": true
                      },
                      {
                          "name": "levelId",
                          "label": "levelId",
                          "value": 3,
                          "itemType": "integer",
                          "isHidden": true
                      }
                  ],
                  "rel": [
                      "form"
                  ],
                  "href": "https://mlegolas.alza.cz/api/basket/v1/socialShoppingItems"
              }
          }
      }
  ],
  "url": "/brita-aluna-bila-starter-pack-3ks-filtru-d5443532.htm",
  "commodityDetailAction": {
      "href": "https://mlegolas.alza.cz/services/restservice.svc/v13/product/5443532",
      "appLink": "catalogProductDetail"
  },
  "moreInfo": {
    "href": "https://dev.alza.cz/art31632.htm",
    "appLink": "article",
    "name": "Více o Sdílej a ušetři"
  }
}
`);

export const mockTexts: string[] = [
  'Vyberte počet zájemců, který seženete a tím i cenu, za kterou zboží nakoupíte. Vložte zboží do košíku a dokončete objednávku.',
  'Po nákupu se vám objeví odkaz. Nasdílejte ho a sežeňte další zájemce.',
  'Až dostatek zájemců dokončí svůj nákup, zboží vám všem doručíme. Podrobné podmínky',
];

export const MockTextAbout =
  'Najděte dostatek známých kteří si chtějí zboží také zakoupit a získejte na něj všichni slevu.';
