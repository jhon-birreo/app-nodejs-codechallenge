import { Inject, Injectable, type OnModuleInit } from '@nestjs/common';
import { type ClientKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService implements OnModuleInit {
  constructor(
    @Inject('KAFKA_CONSUMER') private readonly kafkaClient: ClientKafka,
  ) {}

  async onModuleInit() {
    await this.kafkaClient.connect();
  }
}
