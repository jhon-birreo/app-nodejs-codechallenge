import type { ILoggerProvider } from 'src/features/shared/logger/logger.interface';

describe('Logger interface', () => {
  it('should define log method', () => {
    const logger: ILoggerProvider = {
      log: jest.fn(),
    } as any;
    logger.log('test', 'context');
    expect(logger.log).toHaveBeenCalledWith('test', 'context');
  });
});
