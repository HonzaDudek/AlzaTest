import React, { CSSProperties, useState, FC } from 'react';
import ModalDialog from './modalDialog';
import { withKnobs } from '@storybook/addon-knobs';
import Button from '../button/button';
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
  // component: ModalDialog,
  title: 'Shared Components/Atoms/ModalDialog',
  excludeStories: /.*Data$/,
  decorators: [
    (story: FC): JSX.Element => <div style={styles}>{story({})}</div>,
    withKnobs,
  ],
};

export const ModalDialogExample: CSFStory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Button onClick={(): void => setIsModalOpen(!isModalOpen)}>
        Open Modal
      </Button>
      <ModalDialog
        isOpen={isModalOpen}
        height={'200px'}
        width={'400px'}
        onChange={(): void => setIsModalOpen(!isModalOpen)}
      />
    </>
  );
};
