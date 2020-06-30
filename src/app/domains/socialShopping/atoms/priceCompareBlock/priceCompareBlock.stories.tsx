import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { PriceCompareBlock, PriceCompareBlockProps } from './priceCompareBlock';

export default {
  component: PriceCompareBlock,
  title: 'Domains/Social Shopping/Atoms/Price Compare Block',
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
  excludeStories: /.*Data$/,
  decorators: [withKnobs],
};

export const PriceCompareBlockExample: React.FC<PriceCompareBlockProps> = () => {
  return <PriceCompareBlock originalPrice='500 Kč' actualPrice='299 Kč' />;
};
