import React, { CSSProperties, ReactNode } from 'react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import * as commodity from '../../organisms/groupDialog/__fixtures__/commodity.json';
import { SocialShoppingToggle } from './socialShoppingToggle';

const styles: CSSProperties = {
  boxSizing: 'border-box',
  padding: '20px',
  height: '500px',
  width: '100%',
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
  component: SocialShoppingToggle,
  title: 'Domains/Social Shopping/Molecules/Social Shopping Toggle',
  excludeStories: /.*Data$/,
  decorators: [
    (story: () => React.ReactNode): ReactNode => (
      <div style={styles}>{story()}</div>
    ),
    withKnobs,
  ],
};

const buttonText = {
  header: 'Novinka! Sílej a ušetři',
  body: 'Sežeňte další kupce a všichni dostanete slevu',
  price: `od ${commodity.discountPrice}`,
  more: 'Více',
};

export const SocialShoppingTogglePanelExample: React.FunctionComponent = () => {
  const drawerState = boolean('Loading state', false);
  return (
    <SocialShoppingToggle
      onClick={action('Panel has been clicked')}
      isLoading={drawerState}
      buttonText={buttonText}
    />
  );
};
