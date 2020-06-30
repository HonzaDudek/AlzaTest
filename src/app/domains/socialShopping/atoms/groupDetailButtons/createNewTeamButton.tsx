import React from 'react';
import Button, {
  ButtonColor,
  ButtonSize,
  ButtonWidth,
} from '../../../../sharedComponents/atoms/button/button';
import { handleFormAction } from '../../../../services/formHandler';
import { getImageUrl } from '../../../../../utils/getImageUrl';
import { LPButtonProps } from '../../pages/groupDetail/components/groupStatus';
import { useAnalyticsContext } from '../../../../services/analyticsContext';
import { EventType } from '../../../../../utils/analytics/analytics';
import IconSVG from '../../../../sharedComponents/atoms/iconSVG/iconSVG';

export const CreateNewTeamButton: React.FC<LPButtonProps> = ({
  groupDetails,
  isMobile = false,
}: LPButtonProps) => {
  const analytics = useAnalyticsContext();
  return (
    <Button
      color={ButtonColor.Green}
      width={isMobile ? ButtonWidth.FullWidth : ButtonWidth.Inline}
      size={isMobile ? ButtonSize.Normal : ButtonSize.Large}
      onClick={(): void => {
        const createNewGroupUrl = new URL(
          groupDetails.commodity.url,
          document.URL
        );
        createNewGroupUrl.searchParams.append(
          'createSocialShoppingGroup',
          'true'
        );

        analytics.Analytics.callEvent({
          Event: {
            category: 'Social Shopping',
            action: 'Landing Page Create Group Clicked',
          },
          Type: EventType.GoogleAnalyticsEvent,
        });

        return handleFormAction(
          groupDetails.createNewGroupAction?.form,
          createNewGroupUrl.href
        );
      }}
    >
      <IconSVG
        src={getImageUrl(
          'Styles/images/svg/socialShopping/icon-socialShopping.svg'
        )}
        width={isMobile ? 20 : 25}
        height={isMobile ? 20 : 25}
        className='icn btn__icn__socialShopping--white'
      />
      {groupDetails.createNewGroupAction?.name ?? 'Vytvořit nový tým'}
    </Button>
  );
};
