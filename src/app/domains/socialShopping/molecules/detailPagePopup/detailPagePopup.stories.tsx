import React, { CSSProperties, ReactNode } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import DetailPagePopupDesktop from './detailPagePopup.desktop';
import DetailPagePopupMobile from './detailPagePopup.mobile';

const styles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  borderRadius: '10px',
  boxShadow: '3px 3px 8px 6px rgba(20, 20, 20, 0.5)',
  margin: 'auto',
  padding: '100px',
};

export default {
  component: DetailPagePopupDesktop,
  title: 'Domains/Social Shopping/Molecules/Detail Page Popup',
  excludeStories: /.*Data$/,
  decorators: [
    (story: () => React.ReactNode): ReactNode => (
      <div style={styles}>{story()}</div>
    ),
    withKnobs,
  ],
};

const mockPopoverTexts = {
  spanText: 'Novinka',
  headerText: 'Sdílej a ušetři',
  bodyText:
    'Nově můžete nakupovat společně jako tým a všichni získáte exkluzivní slevu.',
  buttonText: 'Rozumím',
};

export const DetailPagePopupDesktopExample: ReactNode = () => {
  return (
    <DetailPagePopupDesktop
      popoverTexts={mockPopoverTexts}
      setIsOpen={(): void => console.log('clicked')}
    />
  );
};

export const DetailPagePopupMobileExample: ReactNode = () => {
  return (
    <DetailPagePopupMobile
      popoverTexts={mockPopoverTexts}
      setIsOpen={(): void => console.log('clicked')}
    />
  );
};
