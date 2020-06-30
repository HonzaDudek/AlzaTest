import React, { FC } from 'react';
import { render } from '@testing-library/react';

import { DeviceProvider, useDeviceContext } from './deviceContext';

const TestingComponent: FC = () => {
  const isMobile = useDeviceContext();
  return <span>{isMobile ? 'mobile' : 'desktop'}</span>;
};

describe('DeviceContext', () => {
  test('should pass enabled isMobile flag to context consumer', () => {
    const { getByText } = render(
      <DeviceProvider isMobile={true}>
        <TestingComponent />
      </DeviceProvider>
    );

    expect(getByText('mobile')).toBeTruthy();
  });

  test('should pass disabled isMobile flag to context consumer', () => {
    const { getByText, queryByText } = render(
      <DeviceProvider isMobile={false}>
        <TestingComponent />
      </DeviceProvider>
    );

    expect(queryByText('mobile')).toBeNull();
    expect(getByText('desktop')).toBeTruthy();
  });

  test('should throw Error if not wrapped in Provider', () => {
    jest.spyOn(global.console, 'error').mockImplementation();
    expect(() => {
      render(<TestingComponent />);
    }).toThrowError('useDeviceContext must be used within a DeviceProvider');
  });
});
