import ConsoleLogger from './consoleLogger';
import Logger from './logger';
import ApiLogger from './apiLogger';
import VoidLogger from './voidLogger';

declare const Alza: {
  Shared: { PageData: { logApiServerUrl: string } };
};

export class LoggerFactory {
  public static getConsoleLogger(): Logger {
    return ConsoleLogger.getInstance();
  }

  public static getVoidLogger(): Logger {
    return VoidLogger.getInstance();
  }

  private static apiLogger: ApiLogger;
  public static getApiLogger(): Logger {
    if (!LoggerFactory.apiLogger)
      LoggerFactory.apiLogger = new ApiLogger(
        `${Alza.Shared.PageData.logApiServerUrl}/api/log/v1/logs`
      );
    return LoggerFactory.apiLogger;
  }
}

export default LoggerFactory;
