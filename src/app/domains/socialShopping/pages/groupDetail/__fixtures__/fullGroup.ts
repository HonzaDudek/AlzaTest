export const fullGroupMockData = {
  data: {
    self: {
      href:
        'https://frodo.alza.cz/api/socialShopping/v1/groups/89d33fb4-071c-4193-b008-a855c869703e',
      appLink: 'socialShoppingGroup',
    },
    participants: [],
    hash: '89d33fb4-071c-4193-b008-a855c869703e',
    status: 3,
    commodity: {
      self: {
        href: 'https://frodo.alza.cz/api/socialShopping/v1/commodities/4844942',
        appLink: 'socialShoppingProduct',
      },
      id: 4844942,
      img: 'https://i.alza.cz/ImgW.ashx?fd=f10&cd=OPT007c',
      discountPrice: '8,-',
      priceDifference: '1 Kč',
      originalPrice: '9,-',
      name: 'OPTY propojovací 4pin konektor',
      specification: 'Spojka 2x 4pin konektor (M, M)',
      priceLevels: null,
      url: '/opty-propojovaci-4pin-konektor-d4844942.htm',
      commodityDetailAction: null,
      texts: null,
    },
    groupSize: 10,
    capacityLeft: 0,
    capacityLeftText: 'Zbývají 0 místa',
    capacityLeftTextDecorated: '0 místa',
    shareUrl: '',
    shareTitleText: 'Sleva 1 Kč na OPTY propojovací 4pin konektor na Alza.cz',
    createNewGroupAction: {
      appLink: 'socialShoppingProduct',
      name: 'Vytvořit nový tým',
      form: {
        value: [
          {
            name: 'commodityId',
            value: 4844942,
            itemType: 'integer',
            isHidden: true,
          },
          { name: 'count', value: 1.0, itemType: 'decimal', isHidden: true },
          { name: 'services', value: [], itemType: 'set', isHidden: true },
          { name: 'hooks', value: [], itemType: 'set', isHidden: true },
          {
            name: 'levelId',
            label: 'levelId',
            itemType: 'integer',
            isHidden: true,
          },
          {
            name: 'groupId',
            label: 'groupId',
            itemType: 'integer',
            isHidden: true,
          },
        ],
        rel: ['form'],
        href: 'https://frodo.alza.cz/api/socialShopping/v1/commodities/4844942',
      },
    },
    redirectOrderDetailAction: null,
    addToBasketAction: {
      appLink: 'basketAdd',
      name: 'Koupit za 9,-',
      form: {
        value: [
          {
            name: 'items',
            value: [
              {
                value: [
                  {
                    name: 'commodityId',
                    value: 4844942,
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
                href: 'https://frodo.alza.cz',
              },
            ],
            itemType: 'objectArray',
            isHidden: true,
          },
        ],
        rel: ['form'],
        href: 'https://frodo.alza.cz/api/basket/v1/items',
      },
    },
    joinGroupAction: null,
    redirectProductDetailAction: null,
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
    isInStock: true,
    texts: {
      commonTitle: 'Připojte se, sdílejte a ušetřete 150 Kč',
      commonTitleDecorated: 'ušetřete 150 Kč',
      groupDetailTitle: 'Tým je plný',
      groupDetailTitleDecorated: 'Tým je plný',
      groupDetailHeadDescription:
        'Je nám líto. K tomuto týmu se již nedá připojit. Byl naplněn a všichni jeho členové si užívají zboží zlevněné o 300 Kč. \n Vytvořte nový tým a sežeňte dostatek zájemců. Nebo kupte zboží za normální cenu.',
      groupDetailHeadDescriptionDecorated: 'užívají zboží zlevněné o 1 Kč.',
      faqTitle: 'Často kladené dotazy',
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
      howToTitle: 'Jak funguje Sdílej a ušetři?',
      howToTitleDecorated: 'Sdílej a ušetři?',
      howTo: [
        {
          description: 'Připojte se k týmu a zakupte zboží za akční cenu.',
          decorated: 'Připojte se k týmu',
          image:
            'https://i.alza.cz/Styles/images/svg/socialShopping/icon-join-team.svg',
        },
        {
          description: 'Sdílejte nabídku a pomozte sehnat zbytek zájemců.',
          decorated: 'Sdílejte nabídku',
          image:
            'https://i.alza.cz/Styles/images/svg/socialShopping/icon-shouting.svg',
        },
        {
          description: 'Až vás bude dostatek, zboží vám doručíme.',
          decorated: 'zboží vám doručíme.',
          image:
            'https://i.alza.cz/Styles/images/svg/socialShopping/icon-group.svg',
        },
      ],
      dummyParticipantName: 'Volno',
      dummyParticipantText: 'Připojit se',
      moreProductInfoLabel: 'Více o zboží',
      saleLabel: 'Sleva\n150 Kč',
      shareAndSaveLabel: 'Sdílej\na ušetři',
      availability: 'Skladem',
    },
  },
  isLoading: false,
  isError: false,
};
