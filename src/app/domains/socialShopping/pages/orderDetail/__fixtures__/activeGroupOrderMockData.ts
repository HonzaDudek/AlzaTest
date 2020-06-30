export const activeOrderDetailMockData = {
  self: {
    href:
      'http://localhost:52789/api/users/251484/v1/orders/420000245/parts/276845149/items/773489689',
    appLink: 'orderItemDetail',
  },
  commodityId: 5458864,
  commodityName: 'Fén na vlasy Philips Moisture Protect HP8281/00 ',
  commodityUrl:
    'https://dev.alza.cz/philips-moisture-protect-hp8281-00-d5458864.htm',
  imageUrl: 'https://cdn.alza.cz/Foto/f1/PH/PHIFE967.jpg',
  status: 'Očekáváme',
  count: 1,
  pricePerItem: '2 199 Kč',
  price: '2 199 Kč',
  socialShoppingInfo: {
    status: 1,
    groupSize: 5,
    participants: [
      {
        name: 'Jan Dudek',
        city: 'Praha',
        isOrderClient: true,
        description: 'Opustit tým / koupit za plnou cenu',
      },
    ],
    participantShareText: 'Sdílejte slevu a sežeňte zájemce',
    shareUrl: 'https://dev.alza.cz/url/38LH6uYfww',
    shareButtonText: 'Sdílet slevu',
    capacityLeftText: 'Chybí 4 zájemci',
    statusText: null,
    description:
      'Sdílejte nabídku, sežeňte potřebný počet zájemců a každý získáte slevu 100 Kč. Nabídka platí do 8. 5. 2020.',
    originalPrice: '2 299 Kč',
    priceDifference: '100 Kč',
    paymentAction: {
      appLink: 'orderPayment',
      name: 'Doplatit 100 Kč Kč a koupit',
      form: {
        method: 'PUT',
        value: [],
        rel: ['form'],
        href:
          'http://localhost:52789/api/users/251484/v1/orders/420000245/parts/276845149/items/socialShopping/773489689',
      },
    },
    refundAction: {
      appLink: 'orderRemoveOrderItem',
      form: {
        method: 'DELETE',
        value: [],
        rel: ['form'],
        href:
          'https://legolas.alza.cz/api/users/251484/v1/orders/200049417/parts/273345169/items/759985057',
      },
      name: 'Odebrat a vrátit peníze',
    },
    sharingDialog: {
      title:
        'Sleva 100 Kč na Fén na vlasy Philips Moisture Protect HP8281/00  na Alza.cz',
      dialogTitle: 'Sdílet',
      shareUrl: 'https://dev.alza.cz/url/38LH6uYfww',
      buttonText: 'Zkopírovat odkaz',
    },
  },
  commodityDetail: {
    href: 'http://localhost:52789/services/restservice.svc/v13/product/5458864',
    appLink: 'catalogProductDetail',
  },
  addServiceAction: {
    appLink: 'orderItemAddService',
    name: 'Služba',
    form: {
      value: [{ name: 'serviceId', itemType: 'integer', isHidden: true }],
      rel: ['form'],
      href:
        'http://localhost:52789/api/users/251484/v1/orders/420000245/parts/276845149/items/773489689/services',
    },
  },
  addServiceForm: {
    href:
      'http://localhost:52789/api/users/251484/v1/orders/420000245/parts/276845149/items/773489689/servicesForm',
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
        'http://localhost:52789/api/users/251484/v1/orders/420000245/parts/276845149/items',
    },
  },
  decrementCountAction: null,
  removeItemAction: null,
};

export const activeOrderDetailNoRefundActionMockData = {
  self: {
    href:
      'http://localhost:52789/api/users/251484/v1/orders/420000245/parts/276845149/items/773489689',
    appLink: 'orderItemDetail',
  },
  commodityId: 5458864,
  commodityName: 'Fén na vlasy Philips Moisture Protect HP8281/00 ',
  commodityUrl:
    'https://dev.alza.cz/philips-moisture-protect-hp8281-00-d5458864.htm',
  imageUrl: 'https://cdn.alza.cz/Foto/f1/PH/PHIFE967.jpg',
  status: 'Očekáváme',
  count: 1,
  pricePerItem: '2 199 Kč',
  price: '2 199 Kč',
  socialShoppingInfo: {
    status: 1,
    groupSize: 5,
    participants: [
      {
        name: 'Jan Dudek',
        city: 'Praha',
        isOrderClient: true,
        description: 'Opustit tým / koupit za plnou cenu',
      },
    ],
    participantShareText: 'Sdílejte slevu a sežeňte zájemce',
    shareUrl: 'https://dev.alza.cz/url/38LH6uYfww',
    shareButtonText: 'Sdílet slevu',
    capacityLeftText: 'Chybí 4 zájemci',
    statusText: null,
    description:
      'Sdílejte nabídku, sežeňte potřebný počet zájemců a každý získáte slevu 100 Kč. Nabídka platí do 8. 5. 2020.',
    originalPrice: '2 299 Kč',
    priceDifference: '100 Kč',
    paymentAction: {
      appLink: 'orderPayment',
      name: 'Doplatit 100 Kč Kč a koupit',
      form: {
        method: 'PUT',
        value: [],
        rel: ['form'],
        href:
          'http://localhost:52789/api/users/251484/v1/orders/420000245/parts/276845149/items/socialShopping/773489689',
      },
    },
    refundAction: null,
    sharingDialog: {
      title:
        'Sleva 100 Kč na Fén na vlasy Philips Moisture Protect HP8281/00  na Alza.cz',
      dialogTitle: 'Sdílet',
      shareUrl: 'https://dev.alza.cz/url/38LH6uYfww',
      buttonText: 'Zkopírovat odkaz',
    },
  },
  commodityDetail: {
    href: 'http://localhost:52789/services/restservice.svc/v13/product/5458864',
    appLink: 'catalogProductDetail',
  },
  addServiceAction: {
    appLink: 'orderItemAddService',
    name: 'Služba',
    form: {
      value: [{ name: 'serviceId', itemType: 'integer', isHidden: true }],
      rel: ['form'],
      href:
        'http://localhost:52789/api/users/251484/v1/orders/420000245/parts/276845149/items/773489689/services',
    },
  },
  addServiceForm: {
    href:
      'http://localhost:52789/api/users/251484/v1/orders/420000245/parts/276845149/items/773489689/servicesForm',
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
        'http://localhost:52789/api/users/251484/v1/orders/420000245/parts/276845149/items',
    },
  },
  decrementCountAction: null,
  removeItemAction: null,
};

export const activeOrderDetailNoPaymentActionMockData = {
  self: {
    href:
      'http://localhost:52789/api/users/251484/v1/orders/420000245/parts/276845149/items/773489689',
    appLink: 'orderItemDetail',
  },
  commodityId: 5458864,
  commodityName: 'Fén na vlasy Philips Moisture Protect HP8281/00 ',
  commodityUrl:
    'https://dev.alza.cz/philips-moisture-protect-hp8281-00-d5458864.htm',
  imageUrl: 'https://cdn.alza.cz/Foto/f1/PH/PHIFE967.jpg',
  status: 'Očekáváme',
  count: 1,
  pricePerItem: '2 199 Kč',
  price: '2 199 Kč',
  socialShoppingInfo: {
    status: 1,
    groupSize: 5,
    participants: [
      {
        name: 'Jan Dudek',
        city: 'Praha',
        isOrderClient: true,
        description: 'Opustit tým / koupit za plnou cenu',
      },
    ],
    participantShareText: 'Sdílejte slevu a sežeňte zájemce',
    shareUrl: 'https://dev.alza.cz/url/38LH6uYfww',
    shareButtonText: 'Sdílet slevu',
    capacityLeftText: 'Chybí 4 zájemci',
    statusText: null,
    description:
      'Sdílejte nabídku, sežeňte potřebný počet zájemců a každý získáte slevu 100 Kč. Nabídka platí do 8. 5. 2020.',
    originalPrice: '2 299 Kč',
    priceDifference: '100 Kč',
    paymentAction: {
      appLink: 'orderPayment',
      name: 'Doplatit 100 Kč Kč a koupit',
      form: {
        method: 'PUT',
        value: [],
        rel: ['form'],
        href:
          'http://localhost:52789/api/users/251484/v1/orders/420000245/parts/276845149/items/socialShopping/773489689',
      },
    },
    refundAction: {
      appLink: 'orderRemoveOrderItem',
      form: {
        method: 'DELETE',
        value: [],
        rel: ['form'],
        href:
          'https://legolas.alza.cz/api/users/251484/v1/orders/200049417/parts/273345169/items/759985057',
      },
      name: 'Odebrat a vrátit peníze',
    },
    sharingDialog: {
      title:
        'Sleva 100 Kč na Fén na vlasy Philips Moisture Protect HP8281/00  na Alza.cz',
      dialogTitle: 'Sdílet',
      shareUrl: 'https://dev.alza.cz/url/38LH6uYfww',
      buttonText: 'Zkopírovat odkaz',
    },
  },
  commodityDetail: {
    href: 'http://localhost:52789/services/restservice.svc/v13/product/5458864',
    appLink: 'catalogProductDetail',
  },
  addServiceAction: {
    appLink: 'orderItemAddService',
    name: 'Služba',
    form: {
      value: [{ name: 'serviceId', itemType: 'integer', isHidden: true }],
      rel: ['form'],
      href:
        'http://localhost:52789/api/users/251484/v1/orders/420000245/parts/276845149/items/773489689/services',
    },
  },
  addServiceForm: {
    href:
      'http://localhost:52789/api/users/251484/v1/orders/420000245/parts/276845149/items/773489689/servicesForm',
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
        'http://localhost:52789/api/users/251484/v1/orders/420000245/parts/276845149/items',
    },
  },
  decrementCountAction: null,
  removeItemAction: null,
};

export const activeOrderDetailNoBoActionsMockData = {
  self: {
    href:
      'http://localhost:52789/api/users/1113573/v1/orders/187317243/parts/222646007/items/607324824',
    appLink: 'orderItemDetail',
  },
  commodityId: 5259216,
  commodityName:
    'Ochranné sklo Odzu Glass Screen Protector 2pcs Xiaomi Redmi Note 5A',
  commodityUrl:
    'https://dev.alza.cz/odzu-glass-screen-protector-2pcs-xiaomi-redmi-note-5a-d5259216.htm',
  imageUrl: 'https://cdn.alza.cz/Foto/f1/UA/UAG054b75.jpg',
  status: 'Rezervováno',
  count: 5,
  pricePerItem: '99 Kč',
  price: '2 195 Kč',
  socialShoppingInfo: {
    capacityLeftText: 'Chybí 4 zájemci',
    description:
      'Sdílejte nabídku, sežeňte potřebný počet zájemců a každý získáte slevu 100 Kč. Nabídka platí do 24. 4. 2020.',

    groupSize: 5,
    originalPrice: '2 299 Kč',
    participants: [
      { name: 'Lukáš Hadamčík', city: 'Praha', isOrderClient: true },
      { name: 'Martin Š.', city: 'Brno', isOrderClient: false },
    ],
    sharingDialog: {
      buttonText: 'Zkopírovat odkaz',
      dialogTitle: 'Sdílet',
      shareUrl: 'https://legolas.alza.cz/url/gKZNboreae',
      title: 'Sleva 1 Kč na Spojka OPTY propojovací 4pin konektor na Alza.cz',
    },
    paymentAction: null,
    priceDifference: '100',
    refundAction: null,
    shareUrl: 'https://legolas.alza.cz/url/M4B78HVY63',
    status: 1,
    statusText: null,
  },
  commodityDetail: {
    href: 'http://localhost:52789/services/restservice.svc/v13/product/5259216',
    appLink: 'catalogProductDetail',
  },
  addServiceAction: null,
  addServiceForm: null,
  incrementCountAction: null,
  decrementCountAction: null,
  removeItemAction: null,
};

export const activeOrderDetailMockDataLargeGroup = {
  self: {
    href:
      'http://localhost:52789/api/users/251484/v1/orders/420000245/parts/276845149/items/773489689',
    appLink: 'orderItemDetail',
  },
  commodityId: 5458864,
  commodityName: 'Fén na vlasy Philips Moisture Protect HP8281/00 ',
  commodityUrl:
    'https://dev.alza.cz/philips-moisture-protect-hp8281-00-d5458864.htm',
  imageUrl: 'https://cdn.alza.cz/Foto/f1/PH/PHIFE967.jpg',
  status: 'Očekáváme',
  count: 1,
  pricePerItem: '2 199 Kč',
  price: '2 199 Kč',
  socialShoppingInfo: {
    status: 1,
    groupSize: 12,
    participants: [
      {
        name: 'Jan Dudek',
        city: 'Praha',
        isOrderClient: true,
        description: 'Opustit tým / koupit za plnou cenu',
      },
    ],
    participantShareText: 'Sdílejte slevu a sežeňte zájemce',
    shareUrl: 'https://dev.alza.cz/url/38LH6uYfww',
    shareButtonText: 'Sdílet slevu',
    capacityLeftText: 'Chybí 4 zájemci',
    statusText: null,
    description:
      'Sdílejte nabídku, sežeňte potřebný počet zájemců a každý získáte slevu 100 Kč. Nabídka platí do 8. 5. 2020.',
    originalPrice: '2 299 Kč',
    priceDifference: '100 Kč',
    paymentAction: {
      appLink: 'orderPayment',
      name: 'Doplatit 100 Kč Kč a koupit',
      form: {
        method: 'PUT',
        value: [],
        rel: ['form'],
        href:
          'http://localhost:52789/api/users/251484/v1/orders/420000245/parts/276845149/items/socialShopping/773489689',
      },
    },
    refundAction: {
      appLink: 'orderRemoveOrderItem',
      form: {
        method: 'DELETE',
        value: [],
        rel: ['form'],
        href:
          'https://legolas.alza.cz/api/users/251484/v1/orders/200049417/parts/273345169/items/759985057',
      },
      name: 'Odebrat a vrátit peníze',
    },
    sharingDialog: {
      title:
        'Sleva 100 Kč na Fén na vlasy Philips Moisture Protect HP8281/00  na Alza.cz',
      dialogTitle: 'Sdílet',
      shareUrl: 'https://dev.alza.cz/url/38LH6uYfww',
      buttonText: 'Zkopírovat odkaz',
    },
    memberStatusText: 'Další členové',
  },
  commodityDetail: {
    href: 'http://localhost:52789/services/restservice.svc/v13/product/5458864',
    appLink: 'catalogProductDetail',
  },
  addServiceAction: {
    appLink: 'orderItemAddService',
    name: 'Služba',
    form: {
      value: [{ name: 'serviceId', itemType: 'integer', isHidden: true }],
      rel: ['form'],
      href:
        'http://localhost:52789/api/users/251484/v1/orders/420000245/parts/276845149/items/773489689/services',
    },
  },
  addServiceForm: {
    href:
      'http://localhost:52789/api/users/251484/v1/orders/420000245/parts/276845149/items/773489689/servicesForm',
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
        'http://localhost:52789/api/users/251484/v1/orders/420000245/parts/276845149/items',
    },
  },
  decrementCountAction: null,
  removeItemAction: null,
};
