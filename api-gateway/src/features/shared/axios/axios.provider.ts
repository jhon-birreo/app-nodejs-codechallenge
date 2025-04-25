import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AxiosProvider {
  constructor(private readonly httpService: HttpService) {
  }

  async get<T = any>(url: string, config?: any): Promise<AxiosResponse<T>> {
    return lastValueFrom(this.httpService.get<T>(url, config));
  }

  async post<T = any>(
    url: string,
    data: any,
    config?: any,
  ): Promise<AxiosResponse<T>> {
    return lastValueFrom(this.httpService.post<T>(url, data, config));
  }

  async put<T = any>(
    url: string,
    data: any,
    config?: any,
  ): Promise<AxiosResponse<T>> {
    return lastValueFrom(this.httpService.put<T>(url, data, config));
  }

  async delete<T = any>(url: string, config?: any): Promise<AxiosResponse<T>> {
    return lastValueFrom(this.httpService.delete<T>(url, config));
  }

  // Si necesitas también soporte para PATCH, HEAD, etc., puedes agregar más métodos aquí.
}
