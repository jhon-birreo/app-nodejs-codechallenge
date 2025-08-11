import { BaseEntity } from '../../../src/shared/utils/entity.base';

describe('BaseEntity', () => {
  class TestEntity extends BaseEntity<{ name: string; age: number }> {
    constructor(props: Partial<{ name: string; age: number }>, id?: string | number) {
      super(props, id);
    }
    setName(name: string) {
      this.props.name = name + '_setter';
    }
  }

  it('should initialize with props and id', () => {
    const entity = new TestEntity({ name: 'John', age: 30 }, 'id-1');
    expect(entity.getId()).toBe('id-1');
    expect(entity.toObject()).toEqual({ name: 'John_setter', age: 30 });
  });

  it('should set id using setId (via subclass public method)', () => {
    class PublicSetIdEntity extends TestEntity {
      public setIdPublic(id: string | number) {
        this.setId(id);
      }
    }
    const entity = new PublicSetIdEntity({ name: 'Jane', age: 25 });
    entity.setIdPublic('id-2');
    expect(entity.getId()).toBe('id-2');
  });

  it('should call setter if available', () => {
    const entity = new TestEntity({ name: 'Setter', age: 40 });
    expect(entity.toObject().name).toBe('Setter_setter');
  });

  it('should assign property directly if no setter', () => {
    class NoSetterEntity extends BaseEntity<{ foo: string }> {
      constructor(props: Partial<{ foo: string }>, id?: string | number) {
        super(props, id);
      }
    }
    const entity = new NoSetterEntity({ foo: 'bar' });
    expect(entity.toObject().foo).toBe('bar');
  });
});
