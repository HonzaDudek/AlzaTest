import React from 'react';

import AlzaText, { AlzaTextTag } from './alzaText';
import { baseTheme } from '../../../../utils/theme';

export default {
  component: AlzaText,
  title: 'Shared Components/Atoms/Alza Text',
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
};

export const AlzaTexts: React.FC = () => {
  return (
    <>
      <AlzaText tag={AlzaTextTag.Paragraph}>
        Odstavec vytvořený pomocí alzaText komponenty
      </AlzaText>
      <AlzaText tag={AlzaTextTag.Span}>
        Span vytvořený pomocí alzaText komponenty
      </AlzaText>
      <AlzaText tag={AlzaTextTag.Paragraph} color={baseTheme.colors.redPrimary}>
        Odstavec s barvou redPrimary textem vytvořený pomocí alzaText komponenty
      </AlzaText>
    </>
  );
};
