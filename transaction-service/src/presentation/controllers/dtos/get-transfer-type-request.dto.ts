import { IsNotEmpty, IsNumber } from 'class-validator';

export class ParamsWithIdNumber {
  @IsNotEmpty()
  @IsNumber()
  public id: number;
}
