/* eslint-disable @typescript-eslint/no-explicit-any */

export interface Logger {
  info(message: string, ...optionalParams: any[]): void;
  warn(message: string, ...optionalParams: any[]): void;
  error(message: string, ...optionalParams: any[]): void;
}

export default Logger;
