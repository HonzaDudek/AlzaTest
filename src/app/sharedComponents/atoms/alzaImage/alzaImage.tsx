import React, { FunctionComponent } from 'react';

const AlzaImage: FunctionComponent<ImageProp> = ({
  imageUrl,
  alternateText,
  width = '50px',
  height = '50px',
}: ImageProp) => {
  return (
    <img src={imageUrl} alt={alternateText} width={width} height={height} />
  );
};

type ImageProp = {
  imageUrl: string;
  alternateText: string;
  width?: string;
  height?: string;
  cssClass?: string;
};

export default AlzaImage;
