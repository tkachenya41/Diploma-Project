import { useCallback, useMemo, useState } from 'react';

import { type AxiosError } from 'axios';
import { Link } from 'react-router-dom';

import { createUser, type CreateUserResponse } from '~/api/createUser';
import { Button } from '~/shared/ui/Button/Button';
import { InputField } from '~/shared/ui/InputField/InputField';

import { formSchema } from './form.schema';
import { type FormState } from './form.types';
import { getDefaultFormValues, getFormErrors } from './form.utils';
import SignUpStyle from './SignUpForm.module.scss';

export const SignUpForm = ({
  onCreateUser
}: {
  onCreateUser: (user: CreateUserResponse) => void;
}) => {
  const [formState, setFormState] = useState<FormState>(getDefaultFormValues);
  const [touchedFields, setTouchedFields] = useState<Set<string>>(
    () => new Set()
  );

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
      className={SignUpStyle.container}
      onSubmit={(event) => {
        event.preventDefault();
        const { confirmPassword, ...user } = formState;

        setIsLoading(true);
        createUser(user)
          .then((data) => {
            setIsLoading(false);
            onCreateUser(data);
          })
          .catch((error: AxiosError) => {
            setIsLoading(false);
            const errorData = error.response?.data as string;
            setErrorMessage(errorData);
          });
      }}
    >
      <h2 className={SignUpStyle.text}>Sign Up</h2>
      {errorMessage ? (
        <div style={{ color: 'var(--error-color)' }}>
          {Object.values(errorMessage).map((item) => (
            <div key={errorMessage}>
              <span>{item}</span>
              <br />
            </div>
          ))}
        </div>
      ) : null}
      <div className={SignUpStyle.inputs}>
        {formSchema.map((field) => (
          <InputField
            {...field}
            key={field.name}
            value={formState[field.name]}
            error={
              touchedFields.has(field.name) ? formErrors[field.name] : undefined
            }
            onChange={({ target: { value } }) =>
              updateFormValues({ [field.name]: value })
            }
          ></InputField>
        ))}
      </div>
      <Button
        disabled={
          isLoading ||
          touchedFields.size === 0 ||
          Object.keys(formErrors).length > 0
        }
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
