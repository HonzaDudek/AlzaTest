export const orderDetailFullResponseMockData = {
  self: {
    href:
      'https://mlegolas.alza.cz/api/users/251484/v1/orders/199259026/parts/270397819/items/750961833',
    appLink: 'orderItemDetail',
  },
  commodityId: 5458864,
  commodityName: 'Fén na vlasy Philips Moisture Protect HP8281/00 ',
  commodityUrl:
    'https://legolas.alza.cz/philips-moisture-protect-hp8281-00-d5458864.htm',
  imageUrl: 'https://i.alza.cz/Foto/f7/PH/PHIFE967.jpg',
  status: 'Rezervováno',
  count: 1,
  pricePerItem: '2 099 Kč',
  price: '2 099 Kč',
  socialShoppingInfo: null,
  commodityDetail: {
    href:
      'https://mlegolas.alza.cz/services/restservice.svc/v13/product/5458864',
    appLink: 'catalogProductDetail',
  },
  addServiceAction: {
    appLink: 'orderItemAddService',
    name: 'Služba',
    form: {
      value: [
        {
          name: 'serviceId',
          itemType: 'integer',
          isHidden: true,
        },
      ],
      rel: ['form'],
      href:
        'https://mlegolas.alza.cz/api/users/251484/v1/orders/199259026/parts/270397819/items/750961833/services',
    },
  },
  addServiceForm: {
    href:
      'https://mlegolas.alza.cz/api/users/251484/v1/orders/199259026/parts/270397819/items/750961833/servicesForm',
    appLink: 'orderItemServiceSelect',
    name: 'Služba',
  },
  incrementCountAction: {
    appLink: 'orderAddCommodity',
    name: 'Přidat',
    form: {
      value: [
        {
          name: 'commodityId',
          value: 5458864,
          itemType: 'integer',
          isHidden: true,
        },
      ],
      rel: ['form'],
      href:
        'https://mlegolas.alza.cz/api/users/251484/v1/orders/199259026/parts/270397819/items',
    },
  },
  decrementCountAction: null,
  removeItemAction: null,
};
