import { type CardAPI } from '~/entities/Card';

export const BASE_API_URL = import.meta.env.VITE_API_URL as string;

export type ResponseAPI = {
  docs: CardAPI[];
};

export const selectedFields = ['name', 'logo', 'id'];

export const KeyAdmin = 'XWWWRZC-8XPM7C1-NMNMNJZ-0GQNB8Q';
