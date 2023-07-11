import { type InputHTMLAttributes } from 'react';

export type InputProperties = {
  placeholder: string;
  error?: string;
  label: string;
  type?: string;
} & InputHTMLAttributes<HTMLInputElement>;
