import React, { FunctionComponent } from 'react';
import {
  formatApiResponse,
  socialShoppingShareApiResponse,
} from './shareComponent.types';
import DataError from '../../molecules/dataError/dataError';
import { useTranslation } from 'react-i18next';
import GroupSharingSkeleton from '../../molecules/groupSharingSkeleton/groupSharingSkeleton-mobile';
import { GroupSharingTitle } from '../../atoms/groupSharingTitle/groupSharingTitle';
import GroupSharingContainer from '../../atoms/groupSharingContainer/groupSharingContainer-mobile';
import MainContent from './organisms/mainContent';
import { useUserContext } from '../../../../services/userContext';
import useDataApi from '../../../../services/useDataApi';

export type SocialShoppingShareProps = {
  apiUrl: string;
};

/**
 * Block with info about social shopping sharing
 * Mobile web version
 * @param props Properties
 */
export const GroupSharingMobile: FunctionComponent<SocialShoppingShareProps> = props => {
  //console.log('GroupSharingMobile', props);
  const { t: translations } = useTranslation(['socialShopping']);
  const user = useUserContext();
  const useAccessToken = !!user;

  const { isLoading, isError, data, loadData } = useDataApi<
    socialShoppingShareApiResponse
  >({ url: props.apiUrl, useAccessToken: useAccessToken });

  if (isError) {
    return (
      <GroupSharingContainer>
        <GroupSharingTitle>
          {translations('SocialShoppingShare_Title')}
        </GroupSharingTitle>
        <DataError
          onReloadClick={(): void =>
            loadData({ url: props.apiUrl, useAccessToken: useAccessToken })
          }
        />
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

export default GroupSharingMobile;
