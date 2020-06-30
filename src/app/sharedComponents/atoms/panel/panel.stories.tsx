import React, { CSSProperties, FC } from 'react';
import { Panel } from './panel';
import { CSFStory } from '../../../domains/socialShopping/pages/orderDetail/orderDetailMobile.stories';

const styles: CSSProperties = {
  height: '300px',
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
  component: Panel,
  title: 'Shared Components/atoms/Panel',
  decorators: [
    (story: FC): React.ReactFragment => <div style={styles}>{story({})}</div>,
  ],
};

export const panel: CSFStory = () => {
  return <Panel>Some content</Panel>;
};
