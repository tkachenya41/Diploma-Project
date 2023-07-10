import { type InputProperties } from './Input.types';
import InputStyle from './InputField.module.scss';

export const InputField = ({
  placeholder,
  error,
  id,
  label
}: InputProperties) => {
  return (
    <div className={InputStyle.container}>
      <label
        className={InputStyle.label}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        className={InputStyle.input}
        placeholder={placeholder}
      ></input>
      {error && <div className={InputStyle.error}>{error}</div>}
    </div>
  );
};
