export const TransactionTypeId = {
  VISA: 1,
  MASTERCARD: 2,
  AMERICAN_EXPRESS: 3,
  DISCOVER: 4,
} as const;

export type TransactionTypeId =
  (typeof TransactionTypeId)[keyof typeof TransactionTypeId];
