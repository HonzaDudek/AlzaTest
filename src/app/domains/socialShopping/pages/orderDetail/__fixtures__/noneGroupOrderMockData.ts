export const orderDetailMockData = {
  self: {
    href: 'https://legolas.alza.cz/api/socialShopping/v1/orders/198915596',
  },
  orderId: 198915596,
  groups: [
    {
      self: {
        href:
          'https://legolas.alza.cz/api/socialShopping/groups/00000000-0000-0000-0000-000000000000',
        appLink: 'socialShoppingGroup',
      },
      hash: '00000000-0000-0000-0000-000000000000',
      status: 0,
      commodity: {
        self: {
          href:
            'https://legolas.alza.cz/api/socialShopping/v1/commodities/5458864',
          appLink: 'socialShoppingProduct',
        },
        id: 5458864,
        img: 'https://i.alza.cz/Foto/f8/PH/PHIFE967.jpg',
        discountPrice: '2 199,-',
        priceDifference: '100,-',
        originalPrice: '2 299,-',
        name: 'Philips Moisture Protect HP8281/00 ',
        specification:
          'Fén na vlasy s ionizátorem, s difuzérem, příkon 2300 W, ionizace a studený vzduch, počet rychlostí 3, počet teplot 3, difuzér, délka přívodního kabelu 2,5 m, barva bílá a růžová ',
        priceLevels: null,
        url: '/philips-moisture-protect-hp8281-00-d5458864.htm',
        commodityDetailAction: null,
      },
      groupSize: 0,
      capacityLeft: 0,
      shareUrl: 'https://legolas.alza.cz/url/uZZEjdiFNH',
      createNewGroupAction: null,
      redirectOrderDetailAction: null,
      addToBasketAction: null,
    },
  ],
  orderDetailAction: {
    href: 'https://legolas.alza.cz/api/users/12084675/v1/orders/198915596',
    appLink: 'orderDetail',
  },
};
