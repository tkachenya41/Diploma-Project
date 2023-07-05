import axios, { AxiosHeaders } from 'axios';

import {
  BASE_API_URL,
  KeyAdmin,
  cardRequestFields,
  type ResponseAPI
} from './constants';

function isCyrillic(request: string) {
  return /[а-я]/i.test(request);
}

export async function fetchSearch({
  request
}: {
  request: string;
}): Promise<ResponseAPI> {
  const headers = new AxiosHeaders();
  headers.set('X-API-KEY', KeyAdmin);
  const { data } = await axios<ResponseAPI>(
    `${BASE_API_URL}v1.3/movie?selectFields=${cardRequestFields.join(' ')}${
      isCyrillic(request) ? `&name=${request}` : `&alternativeName=${request}`
    }`,
    {
      headers
    }
  );

  return data;
}
