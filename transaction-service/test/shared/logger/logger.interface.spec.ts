import type { ILoggerProvider } from '../../../src/shared/logger/logger.interface';

describe('ILoggerProvider', () => {
  it('should define all required methods', () => {
    const logger: ILoggerProvider = {
      debug: jest.fn(),
      log: jest.fn(),
      error: jest.fn(),
      warn: jest.fn(),
      verbose: jest.fn(),
    };
    expect(typeof logger.debug).toBe('function');
    expect(typeof logger.log).toBe('function');
    expect(typeof logger.error).toBe('function');
    expect(typeof logger.warn).toBe('function');
    expect(typeof logger.verbose).toBe('function');
  });
});
