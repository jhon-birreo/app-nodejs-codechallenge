import { TransferTypeResponseDto } from '../../application/dto/transfer-type.response.dto';
import { BaseEntity } from '../../shared/utils/entity.base';
import type { Nullable } from '../../shared/utils/types';
import type { ITransferType } from '../interfaces/transfer-type.interface';

export class TransferTypeEntity extends BaseEntity<ITransferType> {
  constructor(
    props: Partial<ITransferType>,
    transferTypeId?: Nullable<string>,
  ) {
    super(props, transferTypeId);
  }

  public get id(): number {
    return this.props.id;
  }

  public get name(): string {
    return this.props.name;
  }

  public get description(): string | undefined {
    return this.props.description;
  }

  public get createdAt(): string {
    return this.props.createdAt;
  }

  public get updatedAt(): string | undefined {
    return this.props.updatedAt;
  }

  public setId(id: number) {
    this.props.id = id;
  }

  public setName(value: string) {
    this.props.name = value;
  }

  public setDescription(value: string | undefined) {
    this.props.description = value;
  }

  public setCreatedAt(value: string) {
    this.props.createdAt = value;
  }

  public setUpdatedAt(value: string | undefined) {
    this.props.updatedAt = value;
  }

  public toResponseDto(): TransferTypeResponseDto {
    return {
      id: this.getId() as number,
      name: this.name,
      description: this.description,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
