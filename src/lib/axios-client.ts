import axios from 'axios';
import { KEMENAG_BASE_URL } from '../generator/util/constant';
export type * from './axios-types';

export const kemenag = axios.create({
  baseURL: KEMENAG_BASE_URL,
});
