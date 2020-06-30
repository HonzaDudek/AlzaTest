import ProductCard, { ProductCardType } from './productCard';
import React, { FunctionComponent } from 'react';

export default {
  component: ProductCard,
  title: 'Domains/Social Shopping/Molecules/Product Card',
};

const data = {
  img: 'https://i.alza.cz/Foto/f8/PH/PHIFE967.jpg',
  discountPrice: '2 099,-',
  priceDifference: '200,-',
  originalPrice: '2 299,-',
  name: 'Philips Moisture Protect HP8281/00 ',
  specification:
    'Fén na vlasy s ionizátorem, s difuzérem, příkon 2300 W, ionizace a studený vzduch, počet rychlostí 3, počet teplot 3, difuzér, délka přívodního kabelu 2,5 m, barva bílá a růžová ',
  productUrl:
    'https://www.alza.cz/philips-moisture-protect-hp8281-00-d5458864.htm',
};

export const productCard: FunctionComponent = () => {
  return (
    <>
      <ProductCard
        title={{
          regular: 'Připojte se, sdílejte a ušetřete 400 Kč',
          bold: 'ušetřete 400 Kč',
        }}
        productDetail={data}
        type={ProductCardType.LandingPage}
        availability={{ availabilityText: 'Skladem', isProductAvailable: true }}
      />
      <ProductCard
        title={{
          regular: 'Připojte se, sdílejte a ušetřete 400 Kč',
          bold: 'ušetřete 400 Kč',
        }}
        productDetail={data}
        type={ProductCardType.LandingPage}
        availability={{
          availabilityText: 'Skladem > 5ks',
          isProductAvailable: true,
        }}
      />
      <ProductCard
        title={{
          regular: 'Připojte se, sdílejte a ušetřete 400 Kč',
          bold: 'ušetřete 400 Kč',
        }}
        productDetail={data}
        type={ProductCardType.LandingPage}
        availability={{
          availabilityText: 'Prodej skončil',
          isProductAvailable: true,
        }}
      />
    </>
  );
};
