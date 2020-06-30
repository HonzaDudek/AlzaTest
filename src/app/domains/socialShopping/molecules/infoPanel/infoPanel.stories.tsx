import React, { CSSProperties, ReactNode } from 'react';
import { InfoPanel, InfoPanelSkeleton } from './infoPanel';
import { CSFStory } from '../../pages/orderDetail/orderDetailMobile.stories';

const styles: CSSProperties = {
  height: '500px',
  width: '500px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  borderRadius: '10px',
  boxShadow: '3px 3px 8px 6px rgba(20, 20, 20, 0.5)',
  margin: 'auto',
  padding: '50px',
};

export const InfoPanelExample: CSFStory = () => {
  return (
    <InfoPanel
      icon={
        'https://i.alza.cz/Styles/images/svg/socialShopping/icon-customer.svg'
      }
      index={1}
    >
      {'Toto je příklad kommponenty infopanel.'}
    </InfoPanel>
  );
};

export const InfoPanelSkeletonExample: CSFStory = () => {
  return <InfoPanelSkeleton />;
};

export default {
  title: 'Domains/Social Shopping/Molecules/Info Panel',
  excludeStories: /.*Data$/,
  decorators: [
    (story: () => React.ReactNode): ReactNode => (
      <div style={styles}> {story()}</div>
    ),
  ],
};
