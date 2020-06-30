import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Panel from './panel';

describe('Panel tests: ', function() {
  test('panel should display content', async () => {
    const { getByText } = render(<Panel>Panel with content</Panel>);

    expect(getByText('Panel with content')).toBeTruthy();
  });

  test('panel should call onClick prop when clicked', async () => {
    const mockClickHandler = jest.fn();
    const { getByText } = render(
      <Panel onClick={mockClickHandler}>Hello world</Panel>
    );
    const component = getByText('Hello world');

    fireEvent.click(component);

    expect(component).toBeTruthy();
    await expect(mockClickHandler).toHaveBeenCalledTimes(1);
  });
});
