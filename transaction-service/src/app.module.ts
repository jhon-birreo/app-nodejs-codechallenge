import { Module } from '@nestjs/common';
import { RoutesModule } from './presentation/router.module';
@Module({
  imports: [RoutesModule],
})
export class AppModule {}
