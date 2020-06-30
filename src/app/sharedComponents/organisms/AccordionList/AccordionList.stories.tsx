import React from 'react';

import AccordionList from './AccordionList';
import { AccordionType } from '../../molecules/Accordion/AccordionItem';

export default {
  component: AccordionList,
  title: 'Shared Components/Organisms/Accordion List',
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
};

const testData = [
  {
    title: 'Some cool accordion title',
    content: 'This is content of accordion',
  },
  {
    title: 'Some cool accordion title',
    content: 'This is content of accordion',
  },
  {
    title: 'Some cool accordion title',
    content: 'This is content of accordion',
  },
] as AccordionType[];

export const AccordionListComponent: React.FC = () => {
  return <AccordionList items={testData} />;
};
