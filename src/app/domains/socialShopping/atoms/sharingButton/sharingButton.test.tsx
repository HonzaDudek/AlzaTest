import React from 'react';
import { Analytics } from '../../../../../utils/analytics/analytics';
import { fireEvent, render, wait } from '@testing-library/react';
import { AnalyticsProvider } from '../../../../services/analyticsContext';
import SharingButton from './sharingButton';
import { DeviceProvider } from '../../../../services/deviceContext';
import { mock, mockClear } from 'jest-mock-extended';

describe('Group Detail Status 1 tests ', function() {
  const analytics = mock<Analytics>();

  beforeEach(() => {
    mockClear(analytics);
  });

  test('Desktop - Correct buttons and texts are displayed', async () => {
    const { getByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <DeviceProvider isMobile={false}>
          <SharingButton
            openShareDialog={(): void => {
              console.log();
            }}
            title='Share button'
          />
        </DeviceProvider>
      </AnalyticsProvider>
    );

    const button = getByText('Share button');
    fireEvent.click(button);

    await wait(() => {
      expect(analytics.gaEvent).toHaveBeenCalledWith(
        'Social Shopping',
        'Share Button Clicked'
      );
    });
  });
});
