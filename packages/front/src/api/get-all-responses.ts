import { ResponseEntity } from './types';
import { ApiGateway } from './utils';

export const getAllResponses = (): Promise<ResponseEntity[]> =>
  ApiGateway.request<ResponseEntity[]>({
    method: 'GET',
    url: `/responses`,
  }).then((res) => res.data);
