/* eslint-disable @typescript-eslint/no-explicit-any */
import Logger from './logger';
import callAjax from '../ajaxService';
import { RequestMethods } from '../../../utils/constants';

enum LogLevel {
  Trace = 0,
  Debug = 1,
  Information = 2,
  Warning = 3,
  Error = 4,
  Critical = 5,
}

// https://devlogapi.alza.cz/swagger/

export class ApiLogger implements Logger {
  private static instance: ApiLogger;
  private readonly apiUrl: string;

  public constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  info(message: string, ...optionalParams: any[]): void {
    this.log(message, LogLevel.Information, ...optionalParams);
  }

  warn(message: string, ...optionalParams: any[]): void {
    this.log(message, LogLevel.Warning, ...optionalParams);
  }

  error(message: string, ...optionalParams: any[]): void {
    this.log(message, LogLevel.Error, ...optionalParams);
  }

  private log(
    message: string,
    severity: LogLevel,
    ...optionalParams: any[]
  ): void {
    const requestData = {
      severity: severity,
      clientMessage: message,
      platform: 0,
      application: 0,
      tag: 'ReactApp',
    };

    if (optionalParams?.length)
      requestData.clientMessage += `, params: ${JSON.stringify(
        optionalParams
      )}`;

    callAjax({
      url: this.apiUrl,
      method: RequestMethods.POST,
      requestData: requestData,
      logError: false,
      headers: {
        'Content-Type': 'application/json',
        'cache-control': 'no-cache',
      },
    });
  }
}

export default ApiLogger;
