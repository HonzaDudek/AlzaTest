import React from 'react';

import AlzaHeading, { AlzaHeadingColor } from './alzaHeading';

export default {
  component: AlzaHeading,
  title: 'Shared Components/Atoms/Alza Heading',
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
};

export const AlzaHeadingLevels: React.FC = () => {
  return (
    <>
      <AlzaHeading level={1}>Nadpis 1. úrovně</AlzaHeading>
      <AlzaHeading level={2}>Nadpis 2. úrovně</AlzaHeading>
      <AlzaHeading level={3}>Nadpis 3. úrovně</AlzaHeading>
      <AlzaHeading level={4}>Nadpis 4. úrovně</AlzaHeading>
      <AlzaHeading level={5}>Nadpis 5. úrovně</AlzaHeading>
      <AlzaHeading level={6}>Nadpis 6. úrovně</AlzaHeading>
    </>
  );
};

export const AlzaHeadingColorStyles: React.FC = () => {
  return (
    <>
      <AlzaHeading level={1} color={AlzaHeadingColor.BluePrimary}>
        Modrý nadpis 1. úrovně
      </AlzaHeading>
      <AlzaHeading level={1} color={AlzaHeadingColor.Black}>
        Černý nadpis 1. úrovně
      </AlzaHeading>
    </>
  );
};
