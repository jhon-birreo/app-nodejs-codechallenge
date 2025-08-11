import type { TransferTypeEntity } from '../entities/transfer-type.entity';

export abstract class TransferTypeRepository {
  abstract findById(id: number): Promise<TransferTypeEntity | null>;
  abstract findAll(): Promise<TransferTypeEntity[]>;
}
