/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig } from 'axios';
import { IdentityService } from './identityService';
import { getCurrentCulture } from './applicationService';
import { RequestMethods } from '../../utils/constants';
import Logger from './logger/logger';

/**
 * Ajax service config
 */
export type AjaxServiceConfig = {
  /**
   * API url
   */
  url: string;

  /**
   * Request method
   */
  method?: RequestMethods;

  /**
   * Add access token for logged user to request header?
   */
  useAccessToken?: boolean;

  /**
   * Request headers
   */
  headers?: any;

  /**
   * Request data
   */
  requestData?: any;

  /**
   * Log error when request failed.
   */
  logError?: boolean;
};

const defaultAjaxServiceConfig: AjaxServiceConfig = {
  url: '',
  method: RequestMethods.GET,
  logError: true,
};

const getAxiosConfig = (ajaxConfig: AjaxServiceConfig): AxiosRequestConfig => {
  const config: AxiosRequestConfig = {
    url: ajaxConfig.url,
    method: ajaxConfig.method,
    headers: { 'Accept-Language': getCurrentCulture(), ...ajaxConfig.headers },
    data: ajaxConfig.requestData,
  };

  return config;
};

/**
 * Ajax response type
 */
export type AjaxResponse<T> = {
  data: T;
  status: number;
  statusText: string;
  headers: any;
};

export const callAjax = <T>(
  config: AjaxServiceConfig,
  logger?: Logger
): Promise<AjaxResponse<T>> => {
  config = { ...defaultAjaxServiceConfig, ...config };
  const requestConfig = getAxiosConfig(config);

  if (config.useAccessToken) {
    const promise = new Promise<AjaxResponse<T>>((resolve, reject) => {
      IdentityService.getAccessToken()
        .then(token => {
          requestConfig.headers = {
            ...requestConfig.headers,
            Authorization: `Bearer ${token}`,
          };
          axios
            .request<T>(requestConfig)
            .then(response => {
              resolve({
                data: response.data,
                status: response.status,
                statusText: response.statusText,
                headers: response.headers,
              });
            })
            .catch(error => {
              if (logger && config.logError)
                logger.error('API call error', error, config);
              reject(error);
            });
        })
        .catch(error => {
          if (logger && config.logError)
            logger.error('API call error', error, config);
          reject(error);
        });
    });

    return promise;
  } else {
    const promise = new Promise<AjaxResponse<T>>((resolve, reject) => {
      axios
        .request<T>(requestConfig)
        .then(response => {
          resolve({
            data: response.data,
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
          });
        })
        .catch(error => {
          if (logger && config.logError)
            logger.error('API call error', error, config);
          reject(error);
        });
    });

    return promise;
  }
};

export default callAjax;
