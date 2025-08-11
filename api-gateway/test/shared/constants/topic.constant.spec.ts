import * as topicConstant from '../../../src/features/shared/constants/topic.constant';

describe('topic.constant', () => {
  it('should export topic constants', () => {
    expect(topicConstant).toBeDefined();
    expect(Object.keys(topicConstant).length).toBeGreaterThan(0);
  });
});
