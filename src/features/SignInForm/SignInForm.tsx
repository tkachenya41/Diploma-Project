import { Link } from 'react-router-dom';

import { Button } from '~/shared/ui/Button/Button';
import { InputField } from '~/shared/ui/InputField/InputField';

import SignInStyle from './SignInForm.module.scss';

export const SignInForm = () => {
  return (
    <form className={SignInStyle.container}>
      <h2 className={SignInStyle.text}>Sign In</h2>
      <div className={SignInStyle.inputs}>
        <InputField
          label="Email"
          placeholder="Your email"
        ></InputField>
        <InputField
          label="Password"
          placeholder="Your password"
        ></InputField>
      </div>
      <Button
        className={SignInStyle.button}
        text="Sign In"
      ></Button>
      <p style={{ textAlign: 'center' }}>
        Don’t have an account?{' '}
        <Link
          style={{
            textDecoration: 'none',
            color: 'var(--primary-hover-color)'
          }}
          to={'/sign-up'}
        >
          Sign Up
        </Link>
      </p>
    </form>
  );
};
