import React, { useEffect } from 'react';
import { DisplayGroupStatusOptions } from './groupStatus';
import {
  GroupDetailData,
  GroupStatus,
} from '../../../../../services/socialShopping/groupDetail.data';
import {
  StyledDesktopLandingPage,
  StyledGreySection,
  StyledSectionContent,
  StyledWhiteSection,
} from '../groupDetail.styles';
import { useAnalyticsContext } from '../../../../../services/analyticsContext';
import { EventType } from '../../../../../../utils/analytics/analytics';
import ProductCard, {
  ProductCardType,
} from '../../../molecules/productCard/productCard';
import GroupDetailInfoRow from '../../../organisms/groupDetailInfoRow/groupDetailInfoRow.desktop';
import GroupDetailDesktopFooter from '../../../organisms/groupDetailFooter/groupDetailFooter.desktop';
import MoreInfoButton from '../../../atoms/groupDetailButtons/moreInfoButton';

export type LandingPageMainContentPropsDesktop = {
  data: GroupDetailData;
  redirectUrl?: string;
};

export const displayPrice = (status: GroupStatus): boolean => {
  return (
    status !== GroupStatus.GroupNotAvailable &&
    status !== GroupStatus.ProductNotAvailable &&
    status !== GroupStatus.InGroupNotAvailable
  );
};

export const MainContentDesktop: React.FC<LandingPageMainContentPropsDesktop> = ({
  data,
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
    <StyledDesktopLandingPage
      status={data.status}
      hasAvailableSpots={data.status === GroupStatus.Active}
    >
      <StyledWhiteSection>
        <StyledSectionContent style={{ maxWidth: '700px' }}>
          <ProductCard
            title={{
              regular: data.texts.commonTitle ? data.texts.commonTitle : '',
              bold: data.texts.commonTitleDecorated
                ? data.texts.commonTitleDecorated
                : '',
            }}
            headingLevel={2}
            productDetail={data.commodity}
            type={ProductCardType.LandingPage}
            displayPrice={displayPrice(data.status)}
            availability={{
              availabilityText: data.texts.availability,
              isProductAvailable: data.isInStock,
            }}
            iconTexts={{
              shareAndSaveLabel: data.texts.shareAndSaveLabel,
              saleLabel: data.texts.saleLabel,
            }}
            moreInfoText={data.texts.moreProductInfoLabel}
          />
        </StyledSectionContent>
      </StyledWhiteSection>
      <StyledGreySection>
        <StyledSectionContent>
          <DisplayGroupStatusOptions
            groupDetails={data}
            isMobile={false}
            redirectUrl={redirectUrl}
          />
        </StyledSectionContent>
      </StyledGreySection>
      <StyledWhiteSection>
        <StyledSectionContent>
          <GroupDetailInfoRow texts={data.texts} isMobile={false} />
          {data.moreInfo && (
            <MoreInfoButton
              isMobile={false}
              text={data.moreInfo.name ?? 'Více o Sílej a Ušetři'}
              url={data.moreInfo.href ?? '#'}
            />
          )}
        </StyledSectionContent>
      </StyledWhiteSection>
      {(data.status === GroupStatus.Active ||
        data.status === GroupStatus.InGroupActive) && (
        <GroupDetailDesktopFooter texts={data.texts} shareUrl={data.shareUrl} />
      )}
    </StyledDesktopLandingPage>
  );
};
