export const activeGroupMockData = {
  data: {
    self: {
      href:
        'https://www.alza.cz/api/socialShopping/v1/groups/b5a1ce5b-519f-4c41-af8b-a518442ca614',
      appLink: 'socialShoppingGroup',
    },
    participants: [
      { name: 'Karel', city: 'Praha 7 - Holešovice' },
      { name: 'Karel', city: 'Praha 7 - Holešovice' },
    ],

    hash: 'b5a1ce5b-519f-4c41-af8b-a518442ca614',
    status: 1,
    commodity: {
      self: {
        href: 'https://www.alza.cz/api/socialShopping/v1/commodities/5683612',
        appLink: 'socialShoppingProduct',
      },
      id: 5683612,
      img: 'https://cdn.alza.cz/ImgW.ashx?fd=f10&cd=APWPB160b',
      discountPrice: '849,-',
      priceDifference: '150 Kč',
      originalPrice: '999,-',
      name: 'AlzaPower Thunder 10000mAh Fast Charge + PD3.0 černá',
      specification:
        'Powerbanka s podporou rychlonabíjení, 2xUSB-A (max 3A), 1x vstup/výstup USB-C (max 3A), 1x vstup MicroUSB, 1x vstup Lightning, podpora rychlonabíjení QC 3.0 + PD 3.0, 6ti násobná bezpečnostní ochrana, LED indikátor stavu baterie, výkon 18W, Li-Polymer, nabíjí až dvě zařízení zároveň, USB kabel v balení',
      priceLevels: null,
      url: '/alzapower-thunder-10000mah-fast-charge-pd3-0-cerna-d5683612.htm',
      commodityDetailAction: null,
      texts: null,
    },
    groupSize: 20,
    capacityLeft: 3,
    capacityLeftText: 'Zbývají 3 místa',
    capacityLeftTextDecorated: '3 místa',
    shareUrl: 'https://www.alza.cz/url/eDUYbzpS7o',
    shareTitleText:
      'Sleva 150 Kč na AlzaPower Thunder 10000mAh Fast Charge + PD3.0 černá na Alza.cz',
    createNewGroupAction: null,
    redirectOrderDetailAction: null,
    addToBasketAction: null,
    joinGroupAction: {
      appLink: 'basketAdd',
      name: 'Připojit se a získat slevu 150 Kč',
      form: {
        value: [
          {
            name: 'commodityId',
            value: 5683612,
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
            value: 187,
            itemType: 'integer',
            isHidden: true,
          },
        ],
        rel: ['form'],
        href: 'https://www.alza.cz/api/basket/v1/socialShoppingItems',
      },
    },
    redirectProductDetailAction: null,
    sharingDialog: {
      title:
        'Sleva 150 Kč na AlzaPower Thunder 10000mAh Fast Charge + PD3.0 černá na Alza.cz',
      dialogTitle: 'Sdílet',
      shareUrl: 'https://www.alza.cz/url/eDUYbzpS7o',
      buttonText: 'Zkopírovat odkaz',
    },
    moreInfo: {
      applink: 'article',
      href: 'https://www.alza.cz/sdilej-a-usetri-jak-to-funguje',
      name: 'Více o Sdílej a ušetři',
    },
    expirationDate: '0001-01-01T00:00:00Z',
    isInStock: true,
    texts: {
      commonTitle: 'Připojte se, sdílejte a ušetřete 150 Kč',
      commonTitleDecorated: 'ušetřete 150 Kč',
      groupDetailTitle: 'Zbývají 3 místa',
      groupDetailTitleDecorated: '3 místa',
      groupDetailHeadDescription: null,
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
      sharingTitle: 'Sdílejte nabídku',
      sharingDescription:
        'Víte o někom, kdo by mohl mít zájem? Určitě mu uděláte radost, když mu nabídku pošlete.',
      sharingButtonText: 'Zkopírovat odkaz',
      dummyParticipantName: 'Volno',
      dummyParticipantText: 'Připojit se',
      memberStatus: 'Zobrazit členy',
      availability: 'Skladem',
      expirationDateText: 'Sleva vyprší 14. 5. 12:48',
      moreProductInfoLabel: 'Více o zboží',
      saleLabel: 'Sleva\n150 Kč',
      shareAndSaveLabel: 'Sdílej\na ušetři',
    },
  },
  isLoading: false,
  isError: false,
};
