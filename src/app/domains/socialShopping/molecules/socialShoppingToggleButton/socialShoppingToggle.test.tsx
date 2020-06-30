import React from 'react';
import { render } from '@testing-library/react';
import { SocialShoppingToggle } from './socialShoppingToggle';
import { Analytics } from '../../../../../utils/analytics/analytics';
import { AnalyticsProvider } from '../../../../services/analyticsContext';
import { mock, mockClear } from 'jest-mock-extended';

describe('Social shopping toogle button tests: ', function() {
  const analytics = mock<Analytics>();
  beforeEach(() => {
    mockClear(analytics);
  });

  test('sends social shopping show event correctly', async () => {
    const buttonText = {
      header: 'Button title',
      body: 'Button text',
      price: '150 Kč',
      more: 'Vice',
    };

    render(
      <AnalyticsProvider Analytics={analytics}>
        <SocialShoppingToggle buttonText={buttonText} />
      </AnalyticsProvider>
    );

    expect(analytics.callEvent).toHaveBeenCalledWith({
      Event: {
        action: 'Group Dialog Toggle Button Shown',
        category: 'Social Shopping',
      },
      Type: 0,
    });
  });
});
