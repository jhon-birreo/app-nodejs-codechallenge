import { ExceptionProvider } from '../../../src/shared/exceptions/exception.provider';
import {
  BadRequestException,
  NotFoundException,
  InternalServerErrorException,
  ForbiddenException,
  UnauthorizedException,
  BadGatewayException,
  MethodNotAllowedException,
  ConflictException,
} from '@nestjs/common';

describe('ExceptionProvider', () => {
  let provider: ExceptionProvider;
  beforeEach(() => {
    provider = new ExceptionProvider();
  });

  it('should throw BadRequestException', () => {
    expect(() => provider.badRequestException({ message: 'bad' })).toThrow(BadRequestException);
  });
  it('should throw NotFoundException', () => {
    expect(() => provider.notFoundException({ message: 'not found' })).toThrow(NotFoundException);
  });
  it('should throw InternalServerErrorException', () => {
    expect(() => provider.internalServerErrorException({ message: 'internal' })).toThrow(InternalServerErrorException);
  });
  it('should throw ForbiddenException', () => {
    expect(() => provider.forbiddenException({ message: 'forbidden' })).toThrow(ForbiddenException);
  });
  it('should throw UnauthorizedException', () => {
    expect(() => provider.UnauthorizedException({ message: 'unauthorized' })).toThrow(UnauthorizedException);
  });
  it('should throw BadGatewayException', () => {
    expect(() => provider.badGatewayException({ message: 'bad gateway' })).toThrow(BadGatewayException);
  });
  it('should throw MethodNotAllowedException', () => {
    expect(() => provider.methodNotAllowedException({ message: 'not allowed' })).toThrow(MethodNotAllowedException);
  });
  it('should throw ConflictException', () => {
    expect(() => provider.conflictException({ message: 'conflict' })).toThrow(ConflictException);
  });
});
