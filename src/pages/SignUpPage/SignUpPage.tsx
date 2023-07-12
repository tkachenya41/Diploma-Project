import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { type CreateUserResponse } from '~/api/createUser';
import { ReactComponent as Pixema } from '~/assets/icons/pixema.svg';
import { SignUpForm } from '~/features/SignUpForm/SignUpForm';
import { Button } from '~/shared/ui/Button/Button';

import SignUpPageStyle from './SignUpPage.module.scss';

export const SignUpPage = () => {
  const [createdUser, setCreatedUser] = useState<CreateUserResponse | null>(
    null
  );
  const navigate = useNavigate();
  return (
    <>
      {createdUser ? (
        <div className={SignUpPageStyle.user}>
          <h2>Registration Confirmation</h2>
          <p>{`Please activate your account with the activation
link in the email ${createdUser.email}. Please, check your email`}</p>
          <Button
            onClick={() => navigate(`/`)}
            text="Home"
          ></Button>
        </div>
      ) : (
        <>
          <Link
            to={`/`}
            className={SignUpPageStyle.pixema}
          >
            <Pixema></Pixema>
          </Link>
          <div className={SignUpPageStyle.wrapper}>
            <SignUpForm
              onCreateUser={(newUser) => setCreatedUser(newUser)}
            ></SignUpForm>
          </div>
        </>
      )}
    </>
  );
};
