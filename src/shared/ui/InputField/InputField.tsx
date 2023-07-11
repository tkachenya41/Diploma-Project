import { type InputProperties } from './Input.types';
import InputStyle from './InputField.module.scss';

export const InputField = ({
  placeholder,
  error,
  id,
  label,
  type,
  ...inputProperties
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
        type={type}
        id={id}
        data-valid={!error}
        className={InputStyle.input}
        placeholder={placeholder}
        {...inputProperties}
      ></input>
      {error && <div className={InputStyle.error}>{error}</div>}
    </div>
  );
};
