import type { IFormatExceptionMessage, IExceptionProvider } from '../../../src/shared/exceptions/exceptions.interface';

describe('IFormatExceptionMessage', () => {
  it('should allow message and optional code_error', () => {
    const msg: IFormatExceptionMessage = { message: 'error', code_error: 123 };
    expect(msg.message).toBe('error');
    expect(msg.code_error).toBe(123);
  });

  it('should allow message only', () => {
    const msg: IFormatExceptionMessage = { message: 'error' };
    expect(msg.message).toBe('error');
    expect(msg.code_error).toBeUndefined();
  });
});

describe('IExceptionProvider', () => {
  it('should define all required methods', () => {
    const provider: IExceptionProvider = {
      badRequestException: jest.fn(),
      internalServerErrorException: jest.fn(),
      forbiddenException: jest.fn(),
      UnauthorizedException: jest.fn(),
      notFoundException: jest.fn(),
    };
    expect(typeof provider.badRequestException).toBe('function');
    expect(typeof provider.internalServerErrorException).toBe('function');
    expect(typeof provider.forbiddenException).toBe('function');
    expect(typeof provider.UnauthorizedException).toBe('function');
    expect(typeof provider.notFoundException).toBe('function');
  });
});
