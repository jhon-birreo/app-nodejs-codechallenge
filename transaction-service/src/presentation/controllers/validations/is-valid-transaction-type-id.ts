import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';
import { TransactionTypeId } from '../../../domain/enums/transaction-type.enum';

export function IsValidTransactionTypeId(
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isValidTransactionTypeId',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return Object.values(TransactionTypeId).includes(value); // Validamos si el valor está dentro de los valores del enum
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} debe ser uno de los valores válidos: ${Object.values(TransactionTypeId).join(', ')}`;
        },
      },
    });
  };
}
