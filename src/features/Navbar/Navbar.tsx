import { ReactComponent as Pixema } from '~/assets/icons/pixema.svg';

import NavbarStyle from './Navbar.module.scss';
import { SearchPanel } from './SearchPanel/SearchPanel';
import { UserPanel } from './UserPanel/UserPanel';

export const Navbar = () => {
  return (
    <div className={NavbarStyle.container}>
      <Pixema />
      <SearchPanel />
      <UserPanel />
    </div>
  );
};
