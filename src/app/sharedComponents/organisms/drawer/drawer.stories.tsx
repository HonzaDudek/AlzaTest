import React, { CSSProperties, useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import AlzaDrawer from './alzaDrawer';
import Button, {
  ButtonColor,
  ButtonSize,
  ButtonWidth,
} from '../../atoms/button/button';
import { baseTheme } from '../../../../utils/theme';
import { BuyBasketIcon } from '../../../../assets/icons/buyBasketIcon';
import { CrossIcon } from '../../../../assets/icons/crossIcon';
import { action, HandlerFunction } from '@storybook/addon-actions';
import styled from 'styled-components';

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
  component: AlzaDrawer,
  title: 'Shared Components/Organisms/Alza Drawer',
  excludeStories: /.*Data$/,
  decorators: [
    (story: () => React.ReactNode): React.ReactNode => (
      <div style={styles}> {story()}</div>
    ),
    withKnobs,
  ],
  parameters: { viewport: { defaultViewport: 'iphonex' } },
};

export const AlzaDrawerExample = (): React.ReactNode => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div>
      <Button
        color={ButtonColor.Grey}
        size={ButtonSize.Normal}
        width={ButtonWidth.Inline}
        onClick={(): void => setIsDrawerOpen(!isDrawerOpen)}
      >
        Open Drawer
      </Button>
      <AlzaDrawer
        isOpen={isDrawerOpen}
        onChange={(): void => setIsDrawerOpen(!isDrawerOpen)}
      >
        <div>
          <p style={{ height: '32px', textAlign: 'center' }}>Drawer content</p>
          <p>Drawer can hold multiple elements</p>
          <ul>
            <li style={{ margin: '30px' }}>List items</li>
            <li style={{ margin: '30px' }}>List items</li>
            <li style={{ margin: '30px' }}>
              Až dostatek zájemců dokončí svůj nákup, zboží vám všem doručíme.
              Podrobné podmínky
            </li>
          </ul>
          <div style={{ height: '50', margin: '10px' }} />
          <div style={{ height: '60px', margin: '10px' }} />
          <div style={{ height: '60px', margin: '10px' }} />
          <div style={{ height: '60px', margin: '10px' }} />
        </div>
      </AlzaDrawer>
    </div>
  );
};

const StyledLimitedHeightDrawerContent = styled.div`
  button {
    margin-bottom: 10px;
  }

  button:last-of-type {
    margin-bottom: 0;
  }
`;

export const AlzaDrawerLimitedHeightExample = (): React.ReactNode => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div>
      <Button onClick={(): void => setIsDrawerOpen(!isDrawerOpen)}>
        Open Drawer
      </Button>
      <AlzaDrawer
        isOpen={isDrawerOpen}
        onChange={(): void => setIsDrawerOpen(!isDrawerOpen)}
        fullScreen={false}
      >
        <StyledLimitedHeightDrawerContent>
          <Button
            size={ButtonSize.Normal}
            width={ButtonWidth.FullWidth}
            color={ButtonColor.Green}
            onClick={(): HandlerFunction => action('button clicked')}
          >
            <BuyBasketIcon />
            Doplatit 400Kč a koupit
          </Button>
          <Button
            size={ButtonSize.Normal}
            width={ButtonWidth.FullWidth}
            color={ButtonColor.Grey}
            onClick={(): HandlerFunction => action('button clicked')}
          >
            <CrossIcon fill={baseTheme.colors.redPrimaryLight} />
            Zboží nechci, chci zpět peníze
          </Button>
          <Button
            size={ButtonSize.Normal}
            width={ButtonWidth.FullWidth}
            color={ButtonColor.Grey}
            onClick={(): HandlerFunction => action('button clicked')}
          >
            <CrossIcon fill={baseTheme.colors.redPrimaryLight} />
            Zboží nechci, chci zpět peníze
          </Button>
          <Button
            size={ButtonSize.Normal}
            width={ButtonWidth.FullWidth}
            color={ButtonColor.Grey}
            onClick={(): HandlerFunction => action('button clicked')}
          >
            <CrossIcon fill={baseTheme.colors.redPrimaryLight} />
            Zboží nechci, chci zpět peníze
          </Button>
        </StyledLimitedHeightDrawerContent>
      </AlzaDrawer>
    </div>
  );
};

export const AlzaDrawerScrollableExample = (): React.ReactNode => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const colors = Object.values(baseTheme.sectionColors);

  return (
    <div>
      <Button onClick={(): void => setIsDrawerOpen(!isDrawerOpen)}>
        Open Drawer
      </Button>
      <AlzaDrawer
        isOpen={isDrawerOpen}
        onChange={(): void => setIsDrawerOpen(!isDrawerOpen)}
      >
        {colors.map(color => (
          <div
            style={{
              backgroundColor: color,
              minHeight: '100px',
              width: '100%',
            }}
            key={color}
          >
            {color}
          </div>
        ))}
      </AlzaDrawer>
    </div>
  );
};
