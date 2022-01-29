import { ResponseEntity } from './types';
import { ApiGateway } from './utils';

export type CreateResponse = Omit<ResponseEntity, 'score' | 'id' | 'verdict'>;

export const saveResponse = (data: CreateResponse): Promise<ResponseEntity> =>
  ApiGateway.request<ResponseEntity>({
    method: 'POST',
    url: `/responses/`,
    data: data,
  }).then((res) => res.data);
