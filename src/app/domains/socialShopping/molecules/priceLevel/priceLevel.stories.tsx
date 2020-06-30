import React, { CSSProperties, ReactNode } from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { CSFStory } from '../../pages/orderDetail/orderDetailMobile.stories';
import { PriceLevel } from './priceLevel';
import { PriceLevelType } from '../../../../../utils/apiDataTypes';

const styles: CSSProperties = {
  height: '500px',
  width: '90%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  borderRadius: '10px',
  boxShadow: '3px 3px 8px 6px rgba(20, 20, 20, 0.5)',
  margin: 'auto',
};

export default {
  component: PriceLevel,
  title: 'Domains/Social Shopping/Molecules/Price Level Panel',
  excludeStories: /.*Data$/,
  decorators: [
    (story: () => React.ReactNode): ReactNode => (
      <div style={styles}>
        {' '}
        <div style={{ width: '90%', minWidth: '320px' }}> {story()}</div>
      </div>
    ),
    withKnobs,
  ],
};

export const socialShoppingPanelData: PriceLevelType = {
  priceText: '100,-',
  name: 'Bude nás 5',
  priceLabel: 'Sleva 100,- pro každého',
  discountRate: '20%',
  totalPriceSaving: 'Donromady ušetříme 5 x 100 Kč',
  onSubmit: {
    appLink: 'basketAdd',
    name: 'Vložit do košíku',
    form: {
      value: [
        {
          name: 'items',
          value: [
            {
              value: [
                {
                  name: 'count',
                  value: 1,
                  itemType: 'decimal',
                  isHidden: true,
                },
                {
                  name: 'pricePerItem',
                  value: 2198.87,
                  itemType: 'decimal',
                  isHidden: true,
                  isRequired: false,
                },
              ],
              rel: ['form'],
              href: 'https://legolas.alza.cz',
            },
          ],
          itemType: 'objectArray',
        },
      ],
      rel: ['form'],
      href: 'https://legolas.alza.cz/api/basket/v1/socialShoppingItems',
    },
  },
};

export const PriceLevelMobileExample: CSFStory = () => {
  const drawerState = boolean('Loading state', false);
  return (
    <PriceLevel
      priceLevel={socialShoppingPanelData}
      percentageDiscount={socialShoppingPanelData.discountRate}
      onClick={action('Panel has been clicked')}
      onFocus={action('Panel has been clicked')}
      isLoading={drawerState}
      selected={false}
    />
  );
};

PriceLevelMobileExample.story = {
  parameters: {
    viewport: { defaultViewport: 'iphonex' },
  },
};

export const PriceLevelDesktopExample: CSFStory = () => {
  const drawerState = boolean('Loading state', false);
  return (
    <PriceLevel
      priceLevel={socialShoppingPanelData}
      percentageDiscount={socialShoppingPanelData.discountRate}
      onClick={action('Panel has been clicked')}
      onFocus={action('Panel has been clicked')}
      isLoading={drawerState}
      selected={false}
    />
  );
};

PriceLevelDesktopExample.story = {
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
};
