import axios, { AxiosHeaders } from 'axios';

import { BASE_API_URL, type ResponseAPI, KeyAdmin } from './constants';

export async function fetchMovies({
  limit
}: {
  limit: number;
}): Promise<ResponseAPI> {
  const headers = new AxiosHeaders();
  headers.set('X-API-KEY', `${KeyAdmin}`);
  const { data } = await axios<ResponseAPI>(
    `${BASE_API_URL}v1.3/movie?limit=${limit}`,
    {
      headers
    }
  );
  return data;
}
