import { useReducer, useEffect } from 'react';
import { AjaxServiceConfig, callAjax, AjaxResponse } from './ajaxService';
import { useLoggerContext } from './logger/loggerContext';

type RequestState<T> = {
  isLoading: boolean;
  isError: boolean;
  response?: AjaxResponse<T>;
};

type RequestAction<T> =
  | { type: 'INIT' }
  | { type: 'SUCCESS'; response: AjaxResponse<T> }
  | { type: 'FAILURE' };

/**
 * Reducer to manage response states.
 */
const createDataGetReducer = <T>() => (
  state: RequestState<T>,
  action: RequestAction<T>
): RequestState<T> => {
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        response: action.response,
      };
    case 'FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

/**
 * Data API result type
 */
export type DataApiResult<T> = {
  /**
   * True, if pending for response.
   */
  isLoading: boolean;

  /**
   * True, if error has occurred.
   */
  isError: boolean;

  /**
   * Data
   */
  data?: T;

  /**
   * Function to load data.
   */
  loadData: (url: string | AjaxServiceConfig) => void;
};

/**
 * Returns state and data of API request
 * @param config Request config
 */
export const useDataApi = <T>(
  config: string | AjaxServiceConfig
): DataApiResult<T> => {
  if (typeof config === 'string') {
    config = {
      url: config,
    };
  }

  // make dependency variable from config object to trigger useEffect
  const stringifiedConfig = JSON.stringify(config);
  const dataFetchReducer = createDataGetReducer<T>();
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: true,
    isError: false,
  });
  const { Logger } = useLoggerContext();

  const loadData = (config: string | AjaxServiceConfig): void => {
    dispatch({ type: 'INIT' });

    if (typeof config === 'string') {
      config = {
        url: config,
      };
    }

    callAjax<T>(config, Logger)
      .then(response => {
        dispatch({ type: 'SUCCESS', response: response });
      })
      .catch(() => {
        dispatch({ type: 'FAILURE' });
      });
  };

  useEffect(() => {
    loadData(config);
  }, [stringifiedConfig]);
  return {
    isLoading: state.isLoading,
    isError: state.isError,
    data: state.response?.data,
    loadData: loadData,
  };
};

export default useDataApi;
