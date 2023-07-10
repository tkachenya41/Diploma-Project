import { Link } from 'react-router-dom';

import { ReactComponent as Pixema } from '~/assets/icons/pixema.svg';
import { SignUpForm } from '~/features/SignUpForm/SignUpForm';

import SignUpPageStyle from './SignUpPage.module.scss';

export const SignUpPage = () => {
  return (
    <>
      <Link
        to={`/`}
        className={SignUpPageStyle.pixema}
      >
        <Pixema></Pixema>
      </Link>
      <div className={SignUpPageStyle.wrapper}>
        <SignUpForm></SignUpForm>
      </div>
    </>
  );
};
