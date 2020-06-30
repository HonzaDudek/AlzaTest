import React, { useEffect } from 'react';
import { DisplayGroupStatusOptions } from './groupStatus';
import { GroupStatus } from '../../../../../services/socialShopping/groupDetail.data';
import {
  StyledGreySectionMobile,
  StyledLandingPage,
  StyledSectionContent,
  StyledWhiteSectionMobile,
} from '../groupDetail.styles';
import { useAnalyticsContext } from '../../../../../services/analyticsContext';
import { EventType } from '../../../../../../utils/analytics/analytics';
import { ProductCardType } from '../../../molecules/productCard/productCard';
import {
  displayPrice,
  LandingPageMainContentPropsDesktop,
} from './mainContent.desktop';
import ProductCardMobile from '../../../molecules/productCard/productCard.mobile';
import GroupDetailInfoRow from '../../../organisms/groupDetailInfoRow/groupDetailInfoRow.desktop';
import GroupDetailMobileFooter from '../../../organisms/groupDetailFooter/groupDetailFooter.mobile';
import MoreInfoButton from '../../../atoms/groupDetailButtons/moreInfoButton';

type LandingPageMainContentPropsMobile = LandingPageMainContentPropsDesktop & {
  share: () => void;
};

export const MainContentMobile: React.FC<LandingPageMainContentPropsMobile> = ({
  data,
  share,
  redirectUrl,
}) => {
  const { Analytics } = useAnalyticsContext();

  useEffect(() => {
    Analytics.callEvent({
      Event: {
        path: window.location.href,
        title: 'Social Shopping LP',
      },
      Type: EventType.GoogleAnalyticsPageView,
    });
  }, []);

  return (
    <StyledLandingPage
      hasAvailableSpots={data.status === GroupStatus.Active}
      status={data.status}
    >
      <StyledWhiteSectionMobile>
        <StyledSectionContent>
          <ProductCardMobile
            productDetail={data.commodity}
            type={ProductCardType.LandingPage}
            title={{
              regular: data.texts.commonTitle ?? '',
              bold: data.texts.commonTitleDecorated ?? '',
            }}
            displayPrice={displayPrice(data.status)}
            availability={{
              availabilityText: data.texts.availability,
              isProductAvailable: data.isInStock,
            }}
            headingLevel={2}
            iconTexts={{
              shareAndSaveLabel: data.texts.shareAndSaveLabel,
              saleLabel: data.texts.saleLabel,
            }}
            moreInfoText={data.texts.moreProductInfoLabel}
          />
        </StyledSectionContent>
      </StyledWhiteSectionMobile>
      <StyledGreySectionMobile>
        <StyledSectionContent>
          <DisplayGroupStatusOptions
            groupDetails={data}
            share={(): void => share()}
            isMobile={true}
            redirectUrl={redirectUrl}
          />
        </StyledSectionContent>
      </StyledGreySectionMobile>
      <StyledWhiteSectionMobile>
        <StyledSectionContent>
          <GroupDetailInfoRow texts={data.texts} isMobile={true} />
          {data.moreInfo && (
            <MoreInfoButton
              isMobile={true}
              text={data.moreInfo.name ?? 'Více o Sdílej a Ušetři'}
              url={data.moreInfo.href ?? ''}
            />
          )}
        </StyledSectionContent>
      </StyledWhiteSectionMobile>
      {(data.status === GroupStatus.Active ||
        data.status === GroupStatus.InGroupActive) && (
        <GroupDetailMobileFooter texts={data.texts} openShareDialog={share} />
      )}
    </StyledLandingPage>
  );
};
