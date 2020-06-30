import { useEffect, useState } from 'react';
import axios from 'axios';

import { GroupDetailResponse, GroupDetailHookData } from './groupDetail.data';
import { FormV2 } from '../../../utils/apiDataTypes';
import { formatFormFieldV2 } from '../../../utils/formFormatter';
import { getCurrentCulture } from '../applicationService';

const useGetGroupDetailData = (
  url: string,
  groupHash: string | null
): GroupDetailHookData => {
  const [groupDetailResponse, setGroupDetailData] = useState<
    GroupDetailResponse
  >({
    isLoading: true,
    isError: false,
  });

  const loadGroupDetailData = (
    url: string | undefined,
    groupHash: string | null
  ): void => {
    axios
      .get(`${url}${groupHash}`, {
        headers: { 'Accept-Language': getCurrentCulture() },
      })
      .then(response => {
        if (!response.data) {
          throw new Error('No data received from API');
        }
        setGroupDetailData({
          data: response.data,
          isLoading: false,
          isError: false,
        });
      })
      .catch(() => {
        setGroupDetailData({
          isLoading: false,
          isError: true,
        });
      });
  };

  useEffect(() => {
    setGroupDetailData({
      isLoading: true,
      isError: false,
    });
    if (!groupHash) {
      return;
    }
    loadGroupDetailData(url, groupHash);
  }, [url, groupHash]);

  return {
    groupDetailResponse: groupDetailResponse,
    loadGroupDetailData: loadGroupDetailData,
  };
};

export const handleFormAction = (
  formAction?: FormV2 | undefined,
  redirectUrl?: string
): void => {
  if (formAction) {
    const requestBody = formatFormFieldV2(formAction.value);
    const url = formAction.href;

    if (url !== undefined) {
      axios
        .post(url, requestBody, {
          headers: { 'Accept-Language': getCurrentCulture() },
        })
        .then(() => {
          if (redirectUrl != null) {
            window.location.href = redirectUrl;
          }
        });
    }
  }
};

export const handleAddToGroup = (form: FormV2 | undefined): void => {
  if (form) {
    const requestBody = formatFormFieldV2(form.value);
    const url = form.href;

    if (url !== undefined) {
      axios
        .post(url, requestBody, {
          headers: { 'Accept-Language': getCurrentCulture() },
        })
        .then(() => {
          window.location.href = '/Order1.htm';
        });
    }
  }
};

export default useGetGroupDetailData;
