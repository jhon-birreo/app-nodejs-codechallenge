import { Module } from '@nestjs/common';
import { RoutesModule } from './features/transaction/presentation/router.module';

@Module({
  imports: [RoutesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
