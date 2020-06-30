import React, { FC } from 'react';
import { render } from '@testing-library/react';
import { mock } from 'jest-mock-extended';
import { useLoggerContext, LoggerProvider } from './loggerContext';
import Logger from './logger';

const TestingInfoComponent: FC = () => {
  const { Logger } = useLoggerContext();
  Logger.info('info message');
  return <></>;
};

const TestingErrorComponent: FC = () => {
  const { Logger } = useLoggerContext();
  Logger.error('error message');
  return <></>;
};

describe('LoggerContext', () => {
  test('should log info', async () => {
    const mockLogger = mock<Logger>();
    render(
      <LoggerProvider Logger={mockLogger}>
        <TestingInfoComponent />
      </LoggerProvider>
    );

    expect(mockLogger.info).toHaveBeenCalled();
  });

  test('should log error', () => {
    const mockLogger = mock<Logger>();
    render(
      <LoggerProvider Logger={mockLogger}>
        <TestingErrorComponent />
      </LoggerProvider>
    );

    expect(mockLogger.error).toHaveBeenCalled();
  });

  test('should throw Error if not wrapped in Provider', () => {
    jest.spyOn(global.console, 'error').mockImplementation();
    expect(() => {
      render(<TestingInfoComponent />);
    }).toThrowError('useLoggerContext must be used within a LoggerProvider');
  });
});
