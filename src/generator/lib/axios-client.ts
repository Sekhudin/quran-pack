import axios from 'axios';
import { KEMENAG_BASE_URL } from './constant';
export type * from './axios-types';

export const kemenag = axios.create({
  baseURL: KEMENAG_BASE_URL,
});
