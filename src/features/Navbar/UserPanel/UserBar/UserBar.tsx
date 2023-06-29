import { Link } from 'react-router-dom';

import UserBarStyle from './UserBar.module.scss';

export const UserBar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      data-open={isOpen}
      className={UserBarStyle.container}
    >
      <Link to="/sign-in">Sign In</Link>
      <Link to="sign-up">Sign Up</Link>
    </div>
  );
};
