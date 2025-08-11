import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { AxiosModule } from '../../../src/features/shared/axios/axios.module';

describe('AxiosModule', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [AxiosModule],
    }).compile();
  });

  it('should provide an Axios instance', () => {
    const axiosInstance = module.get('AXIOS_INSTANCE_TOKEN');
    expect(axiosInstance).toBeDefined();
  });

  it('should provide HttpService', () => {
    const httpService = module.get(HttpService);
    expect(httpService).toBeDefined();
  });
});
