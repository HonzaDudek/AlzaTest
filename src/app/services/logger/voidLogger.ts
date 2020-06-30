/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Logger from './logger';

export class VoidLogger implements Logger {
  private static instance: VoidLogger;
  private constructor() {}

  static getInstance(): VoidLogger {
    if (!VoidLogger.instance) {
      VoidLogger.instance = new VoidLogger();
    }

    return VoidLogger.instance;
  }

  info(message: string, ...optionalParams: any[]): void {}

  warn(message: string, ...optionalParams: any[]): void {}

  error(message: string, ...optionalParams: any[]): void {}
}

export default VoidLogger;
