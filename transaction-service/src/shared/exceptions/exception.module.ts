import { Module } from '@nestjs/common';
import { ExceptionProvider } from './exception.provider';

@Module({
	providers: [ExceptionProvider],
	exports: [ExceptionProvider]
})
export class ExceptionModule {}
