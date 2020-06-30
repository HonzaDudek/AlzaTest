import React from 'react';

import AccordionItem from './AccordionItem';

export default {
  component: AccordionItem,
  title: 'Shared Components/Molecules/Accordion',
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
};

export const AccordionComponent: React.FC = () => {
  return (
    <AccordionItem
      title='Some cool accordion title'
      content='This is content of accordion'
    />
  );
};
