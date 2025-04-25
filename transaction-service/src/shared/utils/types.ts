export type Replace<T, R> = Omit<T, keyof R> & R;
export type Nullable<T> = T | undefined | null;
export type Optional<T, K extends keyof T> = Partial<T> & Required<Pick<T, K>>;
export type persistenceType = 'prisma' | 'mongoose';
