import { LoggerProvider } from '../../../src/shared/logger/logger.provider';
import { Logger } from '@nestjs/common';

describe('LoggerProvider', () => {
  let provider: LoggerProvider;
  beforeEach(() => {
    provider = new LoggerProvider();
  });

  it('should call super.debug in non-production', () => {
    process.env.NODE_ENV = 'development';
    const spy = jest.spyOn(Logger.prototype, 'debug').mockImplementation();
    provider.debug('ctx', 'msg');
    expect(spy).toHaveBeenCalledWith('[DEBUG] msg', 'ctx');
    spy.mockRestore();
  });

  it('should not call super.debug in production', () => {
    process.env.NODE_ENV = 'production';
    const spy = jest.spyOn(Logger.prototype, 'debug').mockImplementation();
    provider.debug('ctx', 'msg');
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  it('should call super.log', () => {
    const spy = jest.spyOn(Logger.prototype, 'log').mockImplementation();
    provider.log('ctx', 'msg');
    expect(spy).toHaveBeenCalledWith('[INFO] msg', 'ctx');
    spy.mockRestore();
  });

  it('should call super.error', () => {
    const spy = jest.spyOn(Logger.prototype, 'error').mockImplementation();
    provider.error('ctx', 'msg', 'trace');
    expect(spy).toHaveBeenCalledWith('[ERROR] msg', 'trace', 'ctx');
    spy.mockRestore();
  });

  it('should call super.warn', () => {
    const spy = jest.spyOn(Logger.prototype, 'warn').mockImplementation();
    provider.warn('ctx', 'msg');
    expect(spy).toHaveBeenCalledWith('[WARN] msg', 'ctx');
    spy.mockRestore();
  });

  it('should call super.verbose in non-production', () => {
    process.env.NODE_ENV = 'development';
    const spy = jest.spyOn(Logger.prototype, 'verbose').mockImplementation();
    provider.verbose('ctx', 'msg');
    expect(spy).toHaveBeenCalledWith('[VERBOSE] msg', 'ctx');
    spy.mockRestore();
  });

  it('should not call super.verbose in production', () => {
    process.env.NODE_ENV = 'production';
    const spy = jest.spyOn(Logger.prototype, 'verbose').mockImplementation();
    provider.verbose('ctx', 'msg');
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });
});
