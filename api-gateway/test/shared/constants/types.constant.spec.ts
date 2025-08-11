import * as typesConstant from '../../../src/features/shared/constants/types.constant';

describe('types.constant', () => {
  it('should export types constants', () => {
    expect(typesConstant).toBeDefined();
    expect(Object.keys(typesConstant).length).toBeGreaterThan(0);
  });
});
