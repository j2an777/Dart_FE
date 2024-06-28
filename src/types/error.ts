import { AxiosError } from 'axios';

export interface AxoisErrorResponse {
  message: string;
}

interface CustomErrorData {
  message: string;
  [key: string]: any;
}

interface CustomAxiosResponse {
  data: CustomErrorData;
  status: number;
  statusText: string;
  headers: any;
  config: any;
}

export interface CustomAxiosError extends AxiosError {
  response?: CustomAxiosResponse;
}
