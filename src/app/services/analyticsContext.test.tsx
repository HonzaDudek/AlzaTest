import React, { FC } from 'react';
import ReactGA from 'react-ga';
import { render } from '@testing-library/react';
import { Analytics, EventType } from '../../utils/analytics/analytics';
import { AnalyticsProvider, useAnalyticsContext } from './analyticsContext';

const TestingComponent: FC = () => {
  const { Analytics } = useAnalyticsContext();
  {
    Analytics.callEvent({
      Type: EventType.GoogleAnalyticsEvent,
      Event: {
        category: 'Some category',
        action: 'Event',
      },
    });
  }
  return <></>;
};

describe('AnalyticsContext', () => {
  beforeEach(() => {
    ReactGA.testModeAPI.resetCalls();
  });

  test('should send the correct arguments to window.ga when arguments are passed', () => {
    const channels = ['UA-2123123', 'UA-2155423'];
    const analytics = Analytics.getInstance();
    analytics.initChannels(channels, true);
    expect(ReactGA.testModeAPI.calls).toEqual([
      ['create', 'UA-2123123', 'auto'],
      ['create', 'UA-2155423', 'auto'],
    ]);
  });

  test('should send the correct arguments to window.ga when with ga.event', () => {
    const channels = ['UA-2123123', 'UA-2155423'];
    const analytics = Analytics.getInstance();
    analytics.initChannels(channels, true);
    render(
      <AnalyticsProvider Analytics={analytics}>
        <TestingComponent />
      </AnalyticsProvider>
    );

    expect(ReactGA.testModeAPI.calls).toEqual([
      ['create', 'UA-2123123', 'auto'],
      ['create', 'UA-2155423', 'auto'],
      [
        'send',
        {
          eventAction: 'Event',
          eventCategory: 'Some Category',
          hitType: 'event',
        },
      ],
    ]);
  });

  test('should throw Error if not wrapped in Provider', () => {
    jest.spyOn(global.console, 'error').mockImplementation();
    expect(() => {
      render(<TestingComponent />);
    }).toThrowError(
      'useAnalyticsContext must be used within a AnalyticsProvider'
    );
  });
});
