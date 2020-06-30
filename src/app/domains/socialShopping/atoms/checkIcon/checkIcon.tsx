import { baseTheme } from '../../../../../utils/theme';
import React from 'react';

export const CheckIcon: React.FC = () => {
  return (
    <div
      style={{
        height: '32px',
        width: '32px',
        backgroundColor: `${baseTheme.colors.greenPrimaryLight}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '3px solid white',
        borderRadius: '50%',
      }}
    >
      <img
        src={'/Styles/images/svg/f-check.svg'}
        width='15px'
        height='13px'
        alt='check icon'
      />
    </div>
  );
};
