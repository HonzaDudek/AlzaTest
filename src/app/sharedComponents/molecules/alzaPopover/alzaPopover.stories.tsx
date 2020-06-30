import React, { ReactNode, useState } from 'react';
import { AlzaPopover, alzaPopoverPositionOptions } from './alzaPopover';
import Button, { ButtonColor, ButtonWidth } from '../../atoms/button/button';
import { baseTheme } from '../../../../utils/theme';
import { withKnobs } from '@storybook/addon-knobs';
import { optionsKnob as options } from '@storybook/addon-knobs';
import AlzaText from '../../atoms/alzaText/alzaText';
import { OptionsKnobOptions } from '@storybook/addon-knobs/ts3.5/dist/components/types/Options';

export default {
  component: AlzaPopover,
  title: 'Shared Components/Molecules/Alza Popover',
  decorators: [
    (story: () => React.ReactNode): ReactNode => (
      <div
        style={{
          height: '1200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          margin: 'auto',
          padding: '300px',
        }}
      >
        {' '}
        {story()}
      </div>
    ),
    withKnobs,
  ],
};

const popoverStyle: Partial<CSSStyleDeclaration> = {
  height: '200px',
  width: '200px',
  backgroundColor: `${baseTheme.colors.grey5}`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  overflow: 'visible',
  padding: '20px',
};

export const AlzaPopoverComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const label = 'Position';
  const valuesObj = alzaPopoverPositionOptions;
  const optionsObj: OptionsKnobOptions = {
    display: 'inline-radio',
  };
  const defaultValue = alzaPopoverPositionOptions.Left;
  const groupId = 'Popover-position';

  const value = options(label, valuesObj, defaultValue, optionsObj, groupId);

  return (
    <AlzaPopover
      isOpen={isOpen}
      popoverContent={
        <>
          <AlzaText size='14px' color={baseTheme.colors.white} centered={true}>
            Popover content is rendered here
          </AlzaText>
          <Button
            color={ButtonColor.Red}
            width={ButtonWidth.Inline}
            onClick={(): void => setIsOpen(false)}
          >
            Close popover
          </Button>
        </>
      }
      popoverTrigger={
        <Button
          color={ButtonColor.Red}
          width={ButtonWidth.Inline}
          onClick={(): void => setIsOpen(true)}
        >
          Open popover
        </Button>
      }
      style={popoverStyle}
      position={value}
      hasArrow={true}
      onChange={(nextState: boolean): void => setIsOpen(nextState)}
      arrowColor={baseTheme.colors.grey5}
    />
  );
};
