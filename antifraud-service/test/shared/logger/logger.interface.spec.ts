import type { ILoggerProvider } from 'src/shared/logger/logger.interface';

describe('Logger Interface', () => {
  it('should define the log method', () => {
    const logger: ILoggerProvider = {
      log: jest.fn(),
      error: jest.fn(),
      warn: jest.fn(),
      verbose: jest.fn(),
      debug: jest.fn(),
    };
    expect(typeof logger.log).toBe('function');
  });
});
