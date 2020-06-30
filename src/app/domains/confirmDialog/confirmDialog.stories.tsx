import React, { CSSProperties, ReactNode, useState } from 'react';
import { SocialShoppingConfirmDialog } from './socialShoppingConfirmDialog';
import { withKnobs } from '@storybook/addon-knobs';
import Button, {
  ButtonColor,
  ButtonWidth,
} from '../../sharedComponents/atoms/button/button';

const styles: CSSProperties = {
  height: '500px',
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
  component: SocialShoppingConfirmDialog,
  title: 'Components/Confirm Dialog',
  excludeStories: /.*Data$/,
  decorators: [
    (story: () => React.ReactNode): ReactNode => (
      <div style={styles}> {story()}</div>
    ),
    withKnobs,
  ],
};

export const SocialShoppingConfirmDialogExample: React.FunctionComponent = () => {
  const [drawerState, setDrawerState] = useState(false);

  return (
    <>
      <Button
        color={ButtonColor.Grey}
        width={ButtonWidth.Inline}
        onClick={(): void => setDrawerState(!drawerState)}
      >
        Open Confirm Dialog
      </Button>
      <SocialShoppingConfirmDialog
        isOpen={drawerState}
        setDrawerState={setDrawerState}
      />
    </>
  );
};
