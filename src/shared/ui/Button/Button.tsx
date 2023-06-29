import { type PropsWithChildren } from 'react';

import classNames from 'classnames';

import buttonStyle from './Button.module.scss';
import { ButtonAppearance, type ButtonProperties } from './Button.types';

export const Button = ({
  text,
  icon = null,
  appearance = ButtonAppearance.Primary,
  ...pathThroughProperties
}: PropsWithChildren<ButtonProperties>) => {
  return (
    <button
      {...pathThroughProperties}
      className={`${pathThroughProperties.className || ''} ${classNames({
        [buttonStyle.btn]: true,
        [buttonStyle[appearance]]: true
      })}`}
    >
      {icon && <>{icon}</>}
      {text}
    </button>
  );
};
