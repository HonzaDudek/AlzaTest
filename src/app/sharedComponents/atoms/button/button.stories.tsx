import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  Button,
  ButtonColor,
  ButtonSize,
  ButtonTextAlign,
  ButtonWidth,
} from './button';
import ButtonIcon, { ButtonIconPosition } from './buttonIcon';
import iconShare from '../../../../assets/icons/shareIcon.svg';

export default {
  component: Button,
  title: 'Shared Components/Atoms',
};

export const Buttons: React.ReactNode = () => {
  const buttonsColors = Object.keys(ButtonColor).map(color => {
    const colorEnumType = color as keyof typeof ButtonColor;
    return (
      <Button
        key={color}
        color={ButtonColor[colorEnumType]}
        onClick={action(`${color} button clicked`)}
      >{`${color} button`}</Button>
    );
  });

  const buttonsSizes = Object.keys(ButtonSize).map(size => {
    const sizeEnumType = size as keyof typeof ButtonSize;
    return (
      <Button
        key={size}
        color={ButtonColor.Blue}
        size={ButtonSize[sizeEnumType]}
        onClick={action(`${size} button clicked`)}
      >{`${size} button`}</Button>
    );
  });

  return (
    <>
      <h3>Button color variants</h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '700px',
          boxSizing: 'border-box',
          alignItems: 'center',
        }}
      >
        {buttonsColors}
      </div>

      <h3>Button size variants</h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '500px',
          boxSizing: 'border-box',
          alignItems: 'center',
        }}
      >
        {buttonsSizes}
      </div>

      <h3>Button with icon</h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '700px',
          boxSizing: 'border-box',
          alignItems: 'center',
        }}
      >
        <Button onClick={action('Button clicked')}>
          <ButtonIcon
            src='https://cdn.alza.cz/Foto/CommodityIcons/icon-waterproof.svg'
            alt='ico'
          ></ButtonIcon>
          Button with icon on left
        </Button>

        <Button color={ButtonColor.Red} onClick={action('Button clicked')}>
          Button with icon on right
          <ButtonIcon
            src={iconShare.toString()}
            alt='ico'
            position={ButtonIconPosition.Right}
          ></ButtonIcon>
        </Button>

        <Button
          color={ButtonColor.Red}
          onClick={action('Button clicked')}
          size={ButtonSize.Large}
        >
          Button large
          <ButtonIcon
            src={iconShare.toString()}
            alt='ico'
            width='50px'
            height='50px'
            position={ButtonIconPosition.Right}
            size={ButtonSize.Large}
          ></ButtonIcon>
        </Button>
      </div>

      <h3>Button with icon</h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '300px',
          boxSizing: 'border-box',
          alignItems: 'center',
        }}
      >
        <Button
          onClick={action('Button clicked')}
          width={ButtonWidth.FullWidth}
          textAlign={ButtonTextAlign.Center}
        >
          <ButtonIcon
            src='https://cdn.alza.cz/Foto/CommodityIcons/icon-waterproof.svg'
            alt='ico'
          ></ButtonIcon>
          Button full width
        </Button>
      </div>
    </>
  );
};
