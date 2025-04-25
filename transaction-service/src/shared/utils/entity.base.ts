import type { Nullable } from './types';

export abstract class BaseEntity<T> {
  protected props: T;
  protected _id: string;

  protected constructor(props: Partial<T>, id?: Nullable<string>) {
    this._id = id as string;
    this.props = {} as T;
    this.initializeProps(props);
  }

  private initializeProps(props: Partial<T>): void {
    Object.entries(props).forEach(([key, value]) => {
      const setterName = `set${key.charAt(0).toUpperCase() + key.slice(1)}`;
      if (typeof (this as any)[setterName] === 'function') {
        (this as any)[setterName](value); // Call the setter method if available
      } else {
        (this.props as any)[key] = value;
      }
    });
  }

  public toObject(): T {
    return { ...this.props };
  }

  public getId(): string {
    return this._id;
  }

  protected setId(id: string): void {
    this._id = id;
  }
}
