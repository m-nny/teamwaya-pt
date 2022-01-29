import Axios from 'axios';
import { BACKEND_URL } from '../constants';

export const ApiGateway = Axios.create({
  baseURL: BACKEND_URL,
  timeout: 5 * 1000,
});
