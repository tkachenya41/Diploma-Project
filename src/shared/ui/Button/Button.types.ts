import { type ButtonHTMLAttributes, type ReactElement } from 'react';

export type ButtonProperties = {
  icon?: ReactElement | null;
  appearance?: ButtonAppearances;
  text?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonAppearances =
  (typeof ButtonAppearance)[keyof typeof ButtonAppearance];

export const ButtonAppearance = {
  Primary: 'primary',
  Secondary: 'secondary',
  Arrow: 'arrow'
};
