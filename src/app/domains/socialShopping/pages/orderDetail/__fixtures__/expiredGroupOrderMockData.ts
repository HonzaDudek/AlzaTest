import { GroupStatus } from '../../../../../services/socialShopping/groupDetail.data';

export const expiredOrderDetailMockData = {
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
  price: '495 Kč',
  socialShoppingInfo: {
    status: GroupStatus.Expired,
    groupSize: 7,
    participants: [
      { name: 'Lukáš Hadamčík', city: 'Praha', isOrderClient: true },
      { name: 'Martin Š.', city: 'Brno', isOrderClient: false },
    ],
    shareUrl: 'https://dev.alza.cz/url/XxnNwCdBT6',
    capacityLeftText: 'Chybí 5 zájemci',
    statusText: 'Rezervováno',
    description:
      'Je nám líto, nabídka vypršela 18. 12. Vyberte si, co chcete se zbožím udělat.',
    originalPrice: '995,-',
    priceDifference: '500 Kč',
    sharingDialog: {
      buttonText: 'Zkopírovat odkaz',
      dialogTitle: 'Sdílet',
      shareUrl: 'https://legolas.alza.cz/url/gKZNboreae',
      title: 'Sleva 1 Kč na Spojka OPTY propojovací 4pin konektor na Alza.cz',
    },
    paymentAction: {
      href:
        'http://localhost:52789/Services/RestService.svc/v2/getafterorderpayments/187317243/2192919721',
      appLink: 'orderPayment',
      name: 'Doplatit 500 Kč a koupit',
    },
    refundAction: {
      appLink: 'orderRemoveOrderItem',
      name: 'Odebrat a vrátit peníze',
      form: {
        method: 'DELETE',
        value: [],
        rel: ['form'],
        href:
          'http://localhost:52789/api/users/1113573/v1/orders/187317243/parts/222646007/items/607324824',
      },
    },
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
