import { type PropsWithChildren } from 'react';

import classNames from 'classnames';

import buttonStyle from './Button.module.scss';
import { ButtonAppearance, type ButtonProperties } from './Button.types';

export const Button = ({
  text,
  icon = null,
  appearance = ButtonAppearance.Primary
}: PropsWithChildren<ButtonProperties>) => {
  return (
    <button
      className={classNames({
        [buttonStyle.btn]: true,
        [buttonStyle[appearance]]: true
      })}
    >
      {icon && <div className={buttonStyle.icon}>{icon}</div>}
      {text}
    </button>
  );
};
