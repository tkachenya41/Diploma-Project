import axios, { AxiosHeaders } from 'axios';

import {
  KeyAdmin,
  RatingKP,
  YearProduction,
  type ResponseAPI,
  cardRequestFields,
  sortType,
  sortField,
  Views
} from './constants';

export async function fetchTrend({
  limit
}: {
  limit: number;
}): Promise<ResponseAPI> {
  const headers = new AxiosHeaders();
  headers.set('X-API-KEY', `${KeyAdmin}`);
  const { data } = await axios<ResponseAPI>(
    `https://api.kinopoisk.dev/v1.3/movie?audience.count=${Views}&sortField=${sortField}&sortType=${sortType}&limit=${limit}&year=${YearProduction}&selectFields=${cardRequestFields.join(
      ' '
    )}&rating.kp=${RatingKP}`,
    { headers }
  );

  return data;
}
