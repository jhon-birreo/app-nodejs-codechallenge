import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class ParamsWithId {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  public id: string;
}
