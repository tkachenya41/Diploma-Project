import { useCallback, useMemo, useState } from 'react';

import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '~/shared/ui/Button/Button';
import { InputField } from '~/shared/ui/InputField/InputField';
import { type RootState, useAppDispatch } from '~/store/store.types';
import { createTokens } from '~/store/user/user.api';

import { type FormState } from './form.types';
import { getDefaultFormValues, getFormErrors } from './form.utils';
import SignInStyle from './SignInForm.module.scss';

export const SignInForm = () => {
  const [formState, setFormState] = useState<FormState>(getDefaultFormValues);
  const [touchedFields, setTouchedFields] = useState<Set<string>>(
    () => new Set()
  );
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const user = useSelector((state: RootState) =>
    state.user.currentUser.status === 'success'
      ? state.user.currentUser.data
      : null
  );
  const dispatch = useAppDispatch();

  const updateFormValues = useCallback((newFormValue: Partial<FormState>) => {
    setFormState((previousFields) => ({ ...previousFields, ...newFormValue }));
    setTouchedFields(
      (previousFields) =>
        new Set([...previousFields.values(), ...Object.keys(newFormValue)])
    );
  }, []);

  const formErrors = useMemo(() => getFormErrors(formState), [formState]);

  return (
    <form
      className={SignInStyle.container}
      onSubmit={(event) => {
        event.preventDefault();
        setIsLoading(true);
        dispatch(createTokens(formState))
          .then(() => {
            setIsLoading(true);
            navigate('/');
          })
          .catch((error) => {
            setIsLoading(false);
            setErrorMessage((error as Error).message);
          });
      }}
    >
      <h2 className={SignInStyle.text}>Sign In</h2>
      {errorMessage ? (
        <div style={{ color: 'var(--error-color)' }}>{errorMessage}</div>
      ) : null}
      <div className={SignInStyle.inputs}>
        <InputField
          type="email"
          label="Email"
          id="email"
          placeholder="Your email"
          error={touchedFields.has('email') ? formErrors['email'] : undefined}
          value={formState.email}
          onChange={({ target: { value } }) =>
            updateFormValues({ email: value })
          }
        ></InputField>
        <InputField
          type="password"
          label="Password"
          id="password"
          placeholder="Your password"
          error={
            touchedFields.has('password') ? formErrors['password'] : undefined
          }
          value={formState.password}
          onChange={({ target: { value } }) =>
            updateFormValues({ password: value })
          }
        ></InputField>
      </div>
      <Button
        disabled={
          isLoading ||
          touchedFields.size === 0 ||
          Object.keys(formErrors).length > 0 ||
          !!user
        }
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
