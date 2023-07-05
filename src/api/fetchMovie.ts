import axios, { AxiosHeaders } from 'axios';

import { type CardAPI } from '~/entities/Card';

import { BASE_API_URL, KeyAdmin } from './constants';

export async function fetchMovie(id: number | string): Promise<CardAPI> {
  const headers = new AxiosHeaders();
  headers.set('X-API-KEY', `${KeyAdmin}`);
  const { data } = await axios<CardAPI>(`${BASE_API_URL}v1.3/movie/${id}`, {
    headers
  });
  return data;
}
