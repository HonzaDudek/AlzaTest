import ReactGA from 'react-ga';

export type AnalyticsEventType = {
  Type: EventType;
  Event: ReactGA.EventArgs | ReactGAPageViewType;
};

export enum EventType {
  GoogleAnalyticsEvent,
  GoogleAnalyticsPageView,
}

type ReactGAPageViewType = {
  path: string;
  trackerNames?: ReactGA.TrackerNames;
  title?: string;
};

export class Analytics {
  private static instance: Analytics;

  private constructor() {
    Analytics.instance = this;
  }

  static getInstance(): Analytics {
    return this.instance ?? new Analytics();
  }

  initChannels(channels: string[], testMode = false): void {
    channels.forEach(channel => {
      ReactGA.initialize(channel, { testMode: testMode });
    });
  }

  callEvent = ({ Type, Event }: AnalyticsEventType): void => {
    switch (Type) {
      case EventType.GoogleAnalyticsPageView:
        {
          const currentEvent = Event as ReactGAPageViewType;
          ReactGA.pageview(
            currentEvent.path,
            currentEvent.trackerNames,
            currentEvent.title
          );
        }
        break;
      case EventType.GoogleAnalyticsEvent:
        {
          const currentEvent = Event as ReactGA.EventArgs;
          ReactGA.event({
            action: currentEvent.action,
            category: currentEvent.category,
            label: currentEvent.label,
            value: currentEvent.value,
            nonInteraction: currentEvent.nonInteraction,
            transport: currentEvent.transport,
          });
        }
        break;
      default: {
        throw new Error(`Unhandled action type: ${Type}`);
      }
    }
  };

  gaEvent = (
    category: string,
    action: string,
    label?: string,
    value?: number,
    nonInteraction?: boolean
  ): void => {
    this.callEvent({
      Type: EventType.GoogleAnalyticsEvent,
      Event: {
        category: category,
        action: action,
        label: label,
        value: value,
        nonInteraction: nonInteraction,
      },
    });
  };
}
