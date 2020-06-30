import { render } from '@testing-library/react';
import React from 'react';
import { withMarkup } from './customMatchers';

test('pass functions to matchers', () => {
  const Hello: React.FC = () => (
    <div>
      Hello <span>world</span>
    </div>
  );
  const { getByText } = render(<Hello />);

  // This would result in error as the text is split into different tags
  //const originalQuery = getByText('Hello world');
  //expect(originalQuery).toBeTruthy();

  const query = withMarkup(getByText);
  const queryResult = query('Hello world');

  const spanElement = queryResult.getElementsByTagName('span');
  expect(spanElement).toHaveLength(1);

  // Check whether the component with given text is rendered
  expect(queryResult).toBeTruthy();

  // Check for the specific text
  expect(queryResult.textContent).toBe('Hello world');
});
