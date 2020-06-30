import React from 'react';
import { SocialShoppingToggleSkeleton } from '../../organisms/groupDialog/groupDialog.skeletons';
import { ReactSVG } from 'react-svg';
import { getImageUrl } from '../../../../../utils/getImageUrl';
import { StyledOpenSocialShoppingPanel } from './socialShoppingToogle.styles';
import { useAnalyticsContext } from '../../../../services/analyticsContext';
import { EventType } from '../../../../../utils/analytics/analytics';

export interface OpenSocialShoppingButtonProps {
  /**
   * Sets default state of drawer
   */
  onClick?: () => void;

  /**
   * Decides whether skeleton should be displayed
   */
  isLoading?: boolean;

  /**
   * Gets texts from C# code behind to display in button
   * */
  buttonText: {
    header: string;
    body: string;
    price: string;
    more: string;
  };
}

export const SocialShoppingToggle: React.FC<OpenSocialShoppingButtonProps> = ({
  onClick,
  isLoading,
  buttonText,
}) => {
  let decoratedWord = '';
  const { Analytics } = useAnalyticsContext();

  React.useEffect(() => {
    Analytics.callEvent({
      Event: {
        category: 'Social Shopping',
        action: 'Group Dialog Toggle Button Shown',
      },
      Type: EventType.GoogleAnalyticsEvent,
    });
  }, []);

  // TODO: For new features, get BL to send indication, that this is new feature
  //  and 'Novinka!' should be displayed in different color
  if (!isLoading) {
    decoratedWord = buttonText.header.split(' ')[0];
  }

  if (isLoading) {
    return <SocialShoppingToggleSkeleton />;
  }
  return (
    <StyledOpenSocialShoppingPanel onClick={onClick}>
      <ReactSVG
        src={getImageUrl(
          'Styles/images/svg/socialShopping/icon-socialShopping.svg'
        )}
        className='icon'
      />
      <div className='content'>
        <div className='content__header'>
          <span className='content__header--first'>{decoratedWord}</span>
          <span className='content__header--second'>
            {buttonText.header.replace(decoratedWord, '')}
          </span>
        </div>
        <span className='content__body'>
          {buttonText.body}
          <span className='content__body__more'>{buttonText.more}</span>
        </span>
      </div>
      <div className='price'>{buttonText.price}</div>
    </StyledOpenSocialShoppingPanel>
  );
};
