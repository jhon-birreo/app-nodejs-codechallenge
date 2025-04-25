import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AxiosProvider } from './axios.provider';

@Module({
  imports: [
    HttpModule.register({
      baseURL: process.env.TRANSACTION_SERVICE_URL || 'http://localhost:3000',
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [AxiosProvider],
  exports: [AxiosProvider],
})
export class AxiosModule {}
