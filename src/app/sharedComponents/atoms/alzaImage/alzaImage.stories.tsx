import React from 'react';
import AlzaImage from './alzaImage';

export default {
  component: AlzaImage,
  title: 'Shared Components/Atoms/Alza Image',
};

export const AlzaImages: React.ReactNode = () => {
  return (
    <AlzaImage
      imageUrl='/Styles/full/images/alzak-palec-nahoru.png'
      alternateText='Super cool obrázek'
      height='100px'
      width='50px'
    />
  );
};
