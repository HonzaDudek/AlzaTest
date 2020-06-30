import { useState } from 'react';
import { useAnalyticsContext } from '../../../services/analyticsContext';
import { EventType } from '../../../../utils/analytics/analytics';

export type SocialShoppingToggle = {
  socialShoppingOpen: boolean;
  openSocialShopping: () => void;
  closeSocialShopping: () => void;
};

const useSocialShoppingToggle = (isOpen: boolean): SocialShoppingToggle => {
  const [socialShoppingOpen, setSocialShoppingOpen] = useState(isOpen || false);
  const { Analytics } = useAnalyticsContext();

  const openSocialShopping: () => void = () => {
    if (window.Alza) {
      if (window.Alza.Mobile) {
        window.Alza.Mobile.Utils.Scrollbar.disable();
      }
    }
    setSocialShoppingOpen(true);

    Analytics.callEvent({
      Event: {
        category: 'Social Shopping',
        action: 'Social Shopping Group Dialog Show',
      },
      Type: EventType.GoogleAnalyticsEvent,
    });
  };

  const closeSocialShopping: () => void = () => {
    if (window.Alza) {
      if (window.Alza.Mobile) {
        window.Alza.Mobile.Utils.Scrollbar.enable();
      }
    }
    setSocialShoppingOpen(false);
  };

  return {
    socialShoppingOpen,
    openSocialShopping,
    closeSocialShopping,
  };
};

export default useSocialShoppingToggle;
