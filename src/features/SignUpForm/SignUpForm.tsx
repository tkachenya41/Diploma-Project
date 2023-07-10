import { Link } from 'react-router-dom';

import { Button } from '~/shared/ui/Button/Button';
import { InputField } from '~/shared/ui/InputField/InputField';

import SignUpStyle from './SignUpForm.module.scss';

export const SignUpForm = () => {
  return (
    <form className={SignUpStyle.container}>
      <h2 className={SignUpStyle.text}>Sign Up</h2>
      <div className={SignUpStyle.inputs}>
        <InputField
          label="Name"
          placeholder="Your name"
        ></InputField>
        <InputField
          label="Email"
          placeholder="Your email"
        ></InputField>
        <InputField
          label="Password"
          placeholder="Your password"
        ></InputField>
        <InputField
          label="Confirm password"
          placeholder="Confirm password"
        ></InputField>
      </div>
      <Button
        className={SignUpStyle.button}
        text="Sign Up"
      ></Button>
      <p style={{ textAlign: 'center' }}>
        Already have an account?{' '}
        <Link
          style={{
            textDecoration: 'none',
            color: 'var(--primary-hover-color)'
          }}
          to={'/sign-in'}
        >
          Sign In
        </Link>
      </p>
    </form>
  );
};
