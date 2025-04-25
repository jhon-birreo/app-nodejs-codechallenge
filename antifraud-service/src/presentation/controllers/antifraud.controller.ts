import { Controller, Inject } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EvaluateTransactionUseCase } from '../../application/use-cases/evaluate-transaction.use-case';
import { TOPICS } from '../../shared/constants/topic.constant';
import { TYPES } from '../../shared/constants/types.constant';
import type { CreatedTransactionDto } from '../dtos/created-transaction-request.dto';

@Controller('anti-fraud')
export class AntiFraudController {
  constructor(
    @Inject(TYPES.EVALUATE_TRANSACTION_USECASE)
    private readonly antiFraudUseCase: EvaluateTransactionUseCase,
  ) {}

  @MessagePattern(TOPICS.TRANSACTION_CREATED)
  async handleAntiFraudValidation(@Payload() payload: CreatedTransactionDto) {
    await this.antiFraudUseCase.execute(payload);
  }
}
