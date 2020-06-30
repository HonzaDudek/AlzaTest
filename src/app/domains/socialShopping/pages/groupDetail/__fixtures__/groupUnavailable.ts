export const groupUnavailableMockData = {
  data: {
    self: {
      href:
        'https://malfa.alza.cz/api/socialShopping/v1/groups/592ca4a2-fecd-4f88-87c0-c78bccfc9b04',
      appLink: 'socialShoppingGroup',
    },
    participants: null,
    hash: '592ca4a2-fecd-4f88-87c0-c78bccfc9b04',
    status: 4,
    commodity: {
      self: {
        href: 'https://malfa.alza.cz/api/socialShopping/v1/commodities/5458864',
        appLink: 'socialShoppingProduct',
      },
      id: 5458864,
      img: 'https://cdn.alza.cz/Foto/f8/PH/PHIFE967.jpg',
      discountPrice: '2 099,-',
      priceDifference: '200 Kč',
      originalPrice: '2 299,-',
      name: 'Philips Moisture Protect HP8281/00 ',
      specification:
        'Fén na vlasy s ionizátorem, s difuzérem, příkon 2300 W, ionizace a studený vzduch, počet rychlostí 3, počet teplot 3, difuzér, délka přívodního kabelu 2,5 m, barva bílá a růžová ',
      priceLevels: null,
      url: '/philips-moisture-protect-hp8281-00-d5458864.htm',
      commodityDetailAction: null,
      texts: null,
    },
    groupSize: 5,
    capacityLeft: 0,
    capacityLeftText: 'Zbývají 0 místa',
    capacityLeftTextDecorated: '0 místa',
    shareUrl: '',
    shareTitleText:
      'Sleva 200 Kč na Philips Moisture Protect HP8281/00  na Alza.cz',
    createNewGroupAction: null,
    redirectOrderDetailAction: null,
    addToBasketAction: {
      appLink: 'basketAdd',
      name: 'Koupit za 15 983,-',
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
    isInStock: true,
    joinGroupAction: null,
    redirectProductDetailAction: {
      href:
        'https://malfa.alza.cz/services/restservice.svc/v13/product/5458864',
      appLink: 'catalogProductDetail',
      name: 'Podrobnosti o zboží',
    },
    sharingDialog: {
      buttonText: 'Zkopírovat odkaz',
      dialogTitle: 'Sdílet',
      shareUrl: 'https://legolas.alza.cz/url/gKZNboreae',
      title: 'Sleva 1 Kč na OPTY propojovací 4pin konektor na Alza.cz',
    },
    moreInfo: {
      applink: 'article',
      href: 'https://www.alza.cz/sdilej-a-usetri-jak-to-funguje',
      name: 'Více o Sdílej a ušetři',
    },
    texts: {
      commonTitle: 'Připojte se, sdílejte a ušetřete 150 Kč',
      commonTitleDecorated: 'ušetřete 150 Kč',
      groupDetailTitle: 'Akce skončila',
      groupDetailTitleDecorated: 'Akce skončila',
      groupDetailHeadDescription:
        'Je nám líto. Platnost týmové slevy vypršela a již se k ní nedá připojit. Zboží můžete koupit za jeho běžnou cenu.',
      availability: 'Skladem 1 ks',
      dummyParticipantName: 'Volno',
      dummyParticipantText: 'Připojit se',
      howTo: [
        {
          description:
            'Vyberte počet zájemců, který seženete a tím i cenu, za kterou zboží koupíte.',
          decorated: 'Vyberte počet zájemců, který seženete',
          image:
            'https://i.alza.cz/Styles/images/svg/socialShopping/icon-group.svg',
        },
        {
          description: 'Vložte zboží do košíku a dokončete objednávku.',
          decorated: 'dokončete objednávku.',
          image:
            'https://i.alza.cz/Styles/images/svg/socialShopping/icon-customer.svg',
        },
        {
          description:
            'Po nákupu se vám objeví odkaz k nabídce. Sdílejte ho a sežeňte zbytek zájemců.',
          decorated: 'Sdílejte ho a sežeňte zbytek zájemců.',
          image:
            'https://i.alza.cz/Styles/images/svg/socialShopping/icon-shouting.svg',
        },
        {
          description: 'Až vás bude dostatek, zboží vám doručíme.',
          decorated: 'zboží vám doručíme.',
          image:
            'https://i.alza.cz/Styles/images/svg/socialShopping/icon-delivery.svg',
        },
      ],
      faq: [
        {
          question: 'Jak seženu další zájemce?',
          answer:
            'Po dokončení nákupu získáte odkaz ke svému týmu. Sdílejte ho na sociálních sítích, fórech, e-mailem, jakkoliv vás napadne. Čím víc lidí ho uvidí, tím rychleji tým naplníte a zboží vám doručíme.',
        },
        {
          question: 'Jak dojde k doručení zboží?',
          answer:
            'Každému členovi týmu doručíme nákup způsobem, který si sám zvolil.',
        },
        {
          question: 'Kdy mi zboží doručíte?',
          answer:
            'Ihned po naplnění týmu začneme zboží doručovat všem jeho členům.',
        },
        {
          question: 'Můžu si nákup rozmyslet a tým opustit?',
          answer:
            'Ano, tým můžete kdykoliv opustit. Následně si buď můžete zboží koupit za jeho běžnou cenu, nebo si nechat vrátit peníze.',
        },
        {
          question: 'Co se stane, pokud se nenajde potřebný počet zájemců?',
          answer:
            'Budete mít možnost si doplatit rozdíl do běžné ceny zboží, nebo ho z nákupu odebrat. Peníze vám vrátíme do 3 pracovních dní.',
        },
        {
          question: 'Proč je potřeba zaplatit nákup předem?',
          answer:
            'Při nákupu pro vás zboží rezervujeme a po dobu celé akce ho nebudeme nabízet nikomu jinému. Platba předem je pro nás záruka, že o zboží máte opravdový zájem. Pokud si nákup rozmyslíte, peníze vám vrátíme do 3 pracovních dní.',
        },
        {
          question: 'Lze Sdílej a ušetři kombinovat se slevovými šeky?',
          answer:
            'Ne, zboží zakoupené v režimu "Sdílej a ušetři" již nejde dále zlevnit pomocí slevových šeků.',
        },
        {
          question: 'Můžu zboží reklamovat?',
          answer: 'Ano, reklamovat můžete standardním způsobem.',
        },
        {
          question: 'Můžu zboží vrátit?',
          answer:
            'Ano, zboží můžete bez problému vrátit do 14 dnů od zakoupení. Vše se řídí standardními podmínkami pro odstoupení od kupní smlouvy.',
        },
        {
          question:
            'Lze někde najít seznam všech týmů, do kterých se můžu připojit?',
          answer:
            'Ne, takový seznam prozatím neexistuje. Chceme tím motivovat členy týmů, aby co nejvíce sdíleli.',
        },
        {
          question:
            'Jak poznám, které zboží lze koupit pomocí Sdílej a ušetři?',
          answer:
            'Zboží poznáte podle loga Sdílej a ušetři umístěného přes fotografii. Po otevření stránky konkrétního produktu rovněž najdete tlačítko "Sdílej a ušetři" poblíž běžné cenovky. Veškeré zboží můžete pohromadě najít v kategorii Sdílej a ušetři.',
        },
      ],
      moreProductInfoLabel: 'Více o zboží',
      saleLabel: 'Sleva\n150 Kč',
      shareAndSaveLabel: 'Sdílej a ušetři',
    },
  },
  isLoading: false,
  isError: false,
};
