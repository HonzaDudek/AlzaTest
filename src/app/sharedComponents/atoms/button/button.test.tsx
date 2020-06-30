import React from 'react';
import { render } from '@testing-library/react';
import Button from './button';

describe('Button: ', function() {
  test('button tag', async () => {
    const { getByRole } = render(<Button>Button</Button>);
    getByRole('button');
  });

  test('button text', async () => {
    const { getByText } = render(<Button>Button text</Button>);
    getByText('Button text');
  });
});
