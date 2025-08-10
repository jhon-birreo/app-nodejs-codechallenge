import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RoutesModule } from './presentation/router.module';
@Module({
  imports: [ConfigModule.forRoot(), RoutesModule],
})
export class AppModule {}
