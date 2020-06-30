/* eslint-disable @typescript-eslint/no-explicit-any */
import Logger from './logger';

export class ConsoleLogger implements Logger {
  private static instance: ConsoleLogger;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  static getInstance(): ConsoleLogger {
    if (!ConsoleLogger.instance) {
      ConsoleLogger.instance = new ConsoleLogger();
    }

    return ConsoleLogger.instance;
  }

  info(message: string, ...optionalParams: any[]): void {
    console.info(message, ...optionalParams);
  }

  warn(message: string, ...optionalParams: any[]): void {
    console.warn(message, ...optionalParams);
  }

  error(message: string, ...optionalParams: any[]): void {
    console.error(message, ...optionalParams);
  }
}

export default ConsoleLogger;
