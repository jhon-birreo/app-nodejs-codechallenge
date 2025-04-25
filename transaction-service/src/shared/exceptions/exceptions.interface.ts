export interface IFormatExceptionMessage {
	message: string;
	code_error?: number;
}

export interface IExceptionProvider {
  badRequestException(data: IFormatExceptionMessage): void;
  internalServerErrorException(data?: IFormatExceptionMessage): void;
  forbiddenException(data?: IFormatExceptionMessage): void;
  UnauthorizedException(data?: IFormatExceptionMessage): void;
  notFoundException(data: IFormatExceptionMessage): void;
}
