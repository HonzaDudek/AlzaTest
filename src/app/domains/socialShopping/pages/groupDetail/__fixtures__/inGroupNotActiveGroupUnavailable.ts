export const inGroupNotActiveGroupUnavailableMockData = {
  data: {
    self: {
      href:
        'https://legolas.alza.cz/api/socialShopping/v1/groups/d1561267-ec27-41d7-b1ec-aa184a1150c3',
      appLink: 'socialShoppingGroup',
    },
    participants: [
      {
        name: 'Anonymous',
        city: 'Chalupa',
      },
      {
        name: 'Anonymous',
        city: 'ggh',
      },
      {
        name: 'Anonymous',
        city: 'hfhf',
      },
    ],
    hash: 'd1561267-ec27-41d7-b1ec-aa184a1150c3',
    status: 9,
    commodity: {
      self: {
        href:
          'https://legolas.alza.cz/api/socialShopping/v1/commodities/5459001',
        appLink: 'socialShoppingProduct',
      },
      id: 5459001,
      img: 'https://i.alza.cz/ImgW.ashx?fd=f10&cd=PHIEK727',
      discountPrice: '3 299,-',
      priceDifference: '300 Kč',
      originalPrice: '3 599,-',
      name: 'Philips Sonicare ProtectiveClean Navy Blue HX6871/47',
      specification:
        'Elektrický zubní kartáček sonický, bezpečný a šetrný pro citlivé zuby a dásně, rovnátka a zubní náhrady, frekvence 62.000 pohybů/min, zabudovaný tlakový senzor, 3 režimy čištění: Clean, Gum Care a White, 3 nastavení intenzity: nízká, střední a vysoká, technologie BrushSync - automatické upozornění na potřebu výměny hlavice, časovače QuadPacer a Smartimer, balení obsahuje: 1 kartáček ProtectiveClean, 2 hlavice Optimal White Standard, 1 nabíječka, 1 cestovní pouzdro, barva: námořnická modř',
      priceLevels: null,
      url: '/philips-sonicare-protectiveclean-navy-blue-hx6871-47-d5459001.htm',
      commodityDetailAction: null,
      texts: null,
    },
    groupSize: 5,
    capacityLeft: 2,
    capacityLeftText: 'Zbývá 2 míst',
    capacityLeftTextDecorated: '2 míst',
    shareUrl: '',
    shareTitleText:
      'Sleva 300 Kč na Philips Sonicare ProtectiveClean Navy Blue HX6871/47 na Alza.cz',
    createNewGroupAction: null,
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
                    value: 5459001,
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
    redirectOrderDetailAction: {
      href: 'https://legolas.alza.cz/api/users/9997534/v1/orders/420647886',
      appLink: 'orderDetail',
      name: 'Zobrazit objednávku',
    },
    joinGroupAction: null,
    redirectProductDetailAction: {
      href:
        'http://localhost:52789/services/restservice.svc/v13/product/5459001',
      appLink: 'catalogProductDetail',
      name: 'Podrobnosti o zboží',
    },
    sharingDialog: null,
    moreInfo: {
      applink: 'article',
      href: 'https://www.alza.cz/sdilej-a-usetri-jak-to-funguje',
      name: 'Více o Sdílej a ušetři',
    },
    isInStock: true,
    texts: {
      commonTitle: 'Připojte se, sdílejte a ušetřete 150 Kč',
      commonTitleDecorated: 'ušetřete 150 Kč',
      groupDetailTitle: 'Jste členem. Akce skončila.',
      groupDetailTitleDecorated: 'Akce skončila.',
      groupDetailHeadDescription:
        'Je nám líto. Platnost týmové slevy vypršela a již se k ní nedá připojit. Zboží můžete koupit za jeho běžnou cenu.',
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
      groupDetailStatusText: 'Jste členem',
      moreProductInfoLabel: 'Více o zboží',
      saleLabel: 'Sleva\n150 Kč',
      shareAndSaveLabel: 'Sdílej a ušetři',
      availability: 'Skladem',
    },
  },
};
