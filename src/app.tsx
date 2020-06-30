import React from 'react';
import ReactDOM from 'react-dom';
import Button, {
  ButtonColor,
  ButtonSize,
} from './app/sharedComponents/atoms/button/button';

ReactDOM.render(
  <Button color={ButtonColor.Green} size={ButtonSize.Large}>
    Klikni
  </Button>,
  document.getElementById('root')
);
