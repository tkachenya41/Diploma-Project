import { type CardAPI } from '~/entities/Card';

export const BASE_API_URL = import.meta.env.VITE_API_URL as string;

export type ResponseAPI = {
  docs: CardAPI[];
  total: number;
  page: number;
  limit: number;
};

export const KeyAdmin = 'XWWWRZC-8XPM7C1-NMNMNJZ-0GQNB8Q';

export const cardRequestFields = [
  'name',
  'year',
  'rating',
  'poster',
  'alternativeName',
  'id',
  'genres.name',
  'countries.name'
  // 'countries',
  // 'genres'
];

export const AmountViewsMovie = '500000-10000000';
export const AmountViewsBlank = '1-1000000000';
