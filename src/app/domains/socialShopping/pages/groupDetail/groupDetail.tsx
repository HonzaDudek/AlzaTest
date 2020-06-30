import React, { FC, Suspense } from 'react';
import { Portal } from 'react-portal';
// Import custom components
import AlzaDrawer from '../../../../sharedComponents/organisms/drawer/alzaDrawer';
import { MainContentMobile } from './components/mainContent.mobile';
import { MainContentDesktop } from './components/mainContent.desktop';
import { SocialShoppingError } from '../../sharedComponents/errorComponent/socialShoppingError';
import {
  GroupDetailDesktopSkeleton,
  GroupDetailMobileSkeleton,
} from './groupDetail.skeletons';
import { ShareDialogContent } from './components/shareDialog';
// Import hooks
import useSocialShoppingLandingPageData from '../../hooks/useSocialShoppingLandingPageData';
import { useSocialShoppingShareDialog } from '../../hooks/useSocialShoppingShare';
// Import utilities
import {
  GroupDetailApiUrl,
  GroupDetailResponse,
} from '../../../../services/socialShopping/groupDetail.data';

import { socialShoppingShareGroupType } from '../../organisms/groupSharing/shareComponent.types';
import '../../../../styles/styles.scss';
import { DeviceProvider } from '../../../../services/deviceContext';

export const generateShareGroupInfo = (
  pageData: GroupDetailResponse
): socialShoppingShareGroupType => {
  if (pageData.data) {
    return {
      hash: pageData.data.hash,
      groupSize: pageData.data.groupSize,
      capacityLeft: pageData.data.capacityLeft,
      commodity: {
        id: pageData.data.commodity.id,
        img: pageData.data.commodity.img,
        name: pageData.data.commodity.name,
        url: pageData.data.commodity.url,
        originalPrice: pageData.data.commodity.originalPrice,
        discountPrice: pageData.data.commodity.discountPrice,
        priceDifference: pageData.data.commodity.priceDifference,
        specification: pageData.data.commodity.specification,
      },
      texts: {},
      sharingDialog: pageData.data.sharingDialog,
    } as socialShoppingShareGroupType;
  } else {
    return {} as socialShoppingShareGroupType;
  }
};

export type GroupDetailProps = {
  groupHash: string;
  isMobile: string;
  redirectUrl?: string;
};

const GroupDetail: React.FC<GroupDetailProps> = ({
  groupHash,
  isMobile,
  redirectUrl,
}: GroupDetailProps) => {
  const groupApiUrl = (groupHash?: string): string =>
    GroupDetailApiUrl(groupHash);

  let groupInfo = {} as socialShoppingShareGroupType;

  const {
    socialShoppingLandingPageData,
    loadSocialShoppingLandingPageData,
  } = useSocialShoppingLandingPageData(groupApiUrl(groupHash));

  const {
    isShareDialogOpen,
    openDialog,
    closeShareDialog,
  } = useSocialShoppingShareDialog([groupInfo]);

  if (
    socialShoppingLandingPageData.data !== undefined &&
    socialShoppingLandingPageData.data.commodity !== undefined
  ) {
    groupInfo = generateShareGroupInfo(socialShoppingLandingPageData);
  }

  if (socialShoppingLandingPageData.isError) {
    return (
      <SocialShoppingError
        retryFetch={(): void =>
          loadSocialShoppingLandingPageData(groupApiUrl(groupHash))
        }
      />
    );
  } else if (socialShoppingLandingPageData.isLoading === true) {
    return isMobile ? (
      <GroupDetailMobileSkeleton />
    ) : (
      <GroupDetailDesktopSkeleton />
    );
  } else if (socialShoppingLandingPageData.data) {
    if (isMobile === 'true') {
      return (
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <DeviceProvider isMobile={isMobile === 'true'}>
              <MainContentMobile
                data={socialShoppingLandingPageData.data}
                share={(): void | {} =>
                  openDialog ? openDialog(groupInfo) : {}
                }
                redirectUrl={redirectUrl}
              />
              <Portal>
                <AlzaDrawer
                  isOpen={isShareDialogOpen}
                  onChange={closeShareDialog}
                  fullScreen={false}
                >
                  <ShareDialogContent groupInfo={groupInfo} />
                </AlzaDrawer>
              </Portal>
            </DeviceProvider>
          </Suspense>
        </>
      );
    } else {
      return (
        <DeviceProvider isMobile={isMobile === 'true'}>
          <MainContentDesktop
            data={socialShoppingLandingPageData.data}
            redirectUrl={redirectUrl}
          />
        </DeviceProvider>
      );
    }
  } else {
    throw new Error(
      'No data for social shopping landing page received from API, check return statement in groupDetail.tsx'
    );
  }
};

export default GroupDetail;
