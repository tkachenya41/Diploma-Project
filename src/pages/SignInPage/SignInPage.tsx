import { Link } from 'react-router-dom';

import { ReactComponent as Pixema } from '~/assets/icons/pixema.svg';
import { SignInForm } from '~/features/SignInForm/SignInForm';

import SignInPageStyle from './SignInPageStyle.module.scss';

export const SignInPage = () => {
  return (
    <>
      <Link
        to={`/`}
        className={SignInPageStyle.pixema}
      >
        <Pixema></Pixema>
      </Link>
      <div className={SignInPageStyle.wrapper}>
        <SignInForm></SignInForm>
      </div>
    </>
  );
};
