/**
 * Mock API response
 */
export const mockApiResponse = {
  self: {
    href: 'https://legolas.alza.cz/api/socialShopping/v1/orders/198299371',
  },
  orderId: 198299371,
  texts: {
    description: 'Až vás bude dostatek, můžete si zboží převzít.',
    shareButton: 'Sdílet slevu',
    title: 'Sdílej a ušetři',
  },
  groups: [
    {
      self: {
        href: 'https://legolas.alza.cz/api/socialShopping/groups/0',
      },
      status: 0,
      commodity: {
        self: {
          href:
            'https://legolas.alza.cz/services/restservice.svc/v13/product/5458864',
          appLink: 'catalogProductDetail',
        },
        id: 5458864,
        img: 'https://i.alza.cz/Foto/f8/PH/PHIFE967.jpg',
        discountPrice: '2 199,-',
        originalPrice: '2 299,-',
        priceDifference: '200,-',
        name: 'Philips Moisture Protect HP8281/00 ',
        code: null,
        specification:
          'Fén na vlasy s ionizátorem, s difuzérem, příkon 2300 W, ionizace a studený vzduch, počet rychlostí 3, počet teplot 3, difuzér, délka přívodního kabelu 2,5 m, barva bílá a růžová ',
        basketAction: null,
        url: '/philips-moisture-protect-hp8281-00-d5458864.htm',
      },
      groupSize: 15,
      capacityLeft: 5,
      capacityLeftText: 'Chybí 5 zájemců',
      capacityLeftTextDecorated: '5 zájemců',
      shareUrl: 'www.alza.cz/testtest/0000-0000-000021321',
      shareTitleText:
        'Sleva 100 Kč na Philips Moisture Protect HP8281/00  na Alza.cz',
      sharingDialog: {
        buttonText: 'Zkopírovat odkaz',
        dialogTitle: 'Sdílet',
        shareUrl: 'https://legolas.alza.cz/url/gKZNboreae',
        title: 'Sleva 1 Kč na Spojka OPTY propojovací 4pin konektor na Alza.cz',
      },
      texts: {
        expirationDateText: 'Sleva vyprší 15. 6. 15:56',
      },
      expirationDate: 1592576685,
      createNewGroupAction: null,
      capacityText: null,
      hash: 'ABCD1234',
    },

    {
      self: {
        href: 'https://legolas.alza.cz/api/socialShopping/groups/0',
      },
      status: 0,
      commodity: {
        self: {
          href:
            'https://legolas.alza.cz/services/restservice.svc/v13/product/5458864',
          appLink: 'catalogProductDetail',
        },
        id: 5458864,
        img: 'https://cdn.alza.cz/foto/f8/AA/AA1000a4.jpg',
        discountPrice: '1 399,-',
        originalPrice: '999,-',
        priceDifference: '400,-',
        name: 'Asus RT-AC1200 v.2',
        code: null,
        specification:
          'Fén na vlasy s ionizátorem, s difuzérem, příkon 2300 W, ionizace a studený vzduch, počet rychlostí 3, počet teplot 3, difuzér, délka přívodního kabelu 2,5 m, barva bílá a růžová ',
        basketAction: null,
        url: '/asus-rt-ac1200-v-2-d5663148.htm',
      },
      groupSize: 15,
      capacityLeft: 4,
      capacityLeftText: 'Chybí 4 zájemci',
      capacityLeftTextDecorated: '4 zájemci',
      shareUrl: 'www.alza.cz/testtest/0000-0000-000021321',
      shareTitleText: 'Sleva 100 Kč na Asus RT-AC1200 v.2 na Alza.cz',
      sharingDialog: {
        buttonText: 'Zkopírovat odkaz',
        dialogTitle: 'Sdílet',
        shareUrl: 'https://legolas.alza.cz/url/gKZNboreae',
        title: 'Sleva 1 Kč na Spojka OPTY propojovací 4pin konektor na Alza.cz',
      },
      texts: {
        expirationDateText: 'Sleva vyprší 15. 6. 15:56',
      },
      expirationDate: 1592576685,
      createNewGroupAction: null,
      capacityText: null,
      hash: 'ABCD1234-8888',
    },
  ],
};
