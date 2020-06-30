import React, { FunctionComponent } from 'react';
import CssClasses from './groupSharing-desktop.module.scss';
import DataError from '../../molecules/dataError/dataError';
import { useTranslation } from 'react-i18next';
import GroupSharingContainer from '../../atoms/groupSharingContainer/groupSharingContainer-desktop';
import GroupSharingSkeleton from '../../molecules/groupSharingSkeleton/groupSharingSkeleton-desktop';
import { GroupSharingTitle } from '../../atoms/groupSharingTitle/groupSharingTitle';

import MainContent from './organisms/mainContent';
import { SocialShoppingShareProps } from './groupSharing-mobile';
import { useUserContext } from '../../../../services/userContext';
import useDataApi from '../../../../services/useDataApi';
import {
  socialShoppingShareApiResponse,
  formatApiResponse,
} from './shareComponent.types';

/**
 * Block with info about social shopping sharing
 * Desktop web version
 * @param props Properties
 */
export const GroupSharingDesktop: FunctionComponent<SocialShoppingShareProps> = props => {
  const { t: translations } = useTranslation(['socialShopping']);
  const user = useUserContext();
  const useAccessToken = !!user;

  const { isLoading, isError, data, loadData } = useDataApi<
    socialShoppingShareApiResponse
  >({ url: props.apiUrl, useAccessToken: useAccessToken });

  if (isError) {
    return (
      <GroupSharingContainer>
        <div className={CssClasses.errorCnt}>
          <GroupSharingTitle>
            {translations('SocialShoppingShare_Title')}
          </GroupSharingTitle>
          <DataError
            onReloadClick={(): void =>
              loadData({ url: props.apiUrl, useAccessToken: useAccessToken })
            }
          />
        </div>
      </GroupSharingContainer>
    );
  } else if (isLoading) {
    // Loading data - render skeleton
    return (
      <GroupSharingSkeleton title={translations('SocialShoppingShare_Title')} />
    );
  } else {
    // Set content of share dialog component

    return (
      <MainContent
        socialShoppingGroupSharingData={formatApiResponse(translations, data)}
      />
    );
  }
};

export default GroupSharingDesktop;
