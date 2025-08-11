import { Module } from '@nestjs/common';
import { TransactionModule } from './features/transaction/presentation/transaction.module';
import { TransferTypeModule } from './features/transfer-type/presentation/transfer-type.module';

@Module({
  imports: [TransactionModule, TransferTypeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
