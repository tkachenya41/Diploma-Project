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
  'countries.name',
  'audience.count'
];

export const YearProduction = '2018-2023';
export const RatingKP = '7,5-10';
export const sortField = 'rating.imdb';
export const sortType = '-1';
export const Views = '500000-100000000000000';
