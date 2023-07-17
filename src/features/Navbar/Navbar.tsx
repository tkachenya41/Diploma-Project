import { useState } from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as Burger } from '~/assets/icons/burger.svg';
import { ReactComponent as Cross } from '~/assets/icons/cross-burger.svg';
import { ReactComponent as Pixema } from '~/assets/icons/pixema.svg';
import { useOutsideClick } from '~/hooks/UseOutsideClick/UseOutsideClick';
import { Button } from '~/shared/ui/Button/Button';

import NavbarStyle from './Navbar.module.scss';
import { SearchPanel } from './SearchPanel/SearchPanel';
import { UserPanel } from './UserPanel/UserPanel';
import { Menu } from '../Menu/Menu';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleBurger = () => {
    setIsOpen((hasBeenOpened) => !hasBeenOpened);
  };

  const reference = useOutsideClick(() => (isOpen ? toggleBurger() : null));
  return (
    <div className={NavbarStyle.container}>
      <Link
        className={NavbarStyle.pixema}
        to="/"
      >
        <Pixema />
      </Link>
      <SearchPanel />
      <UserPanel />
      <Button
        className={NavbarStyle.burger}
        onClick={toggleBurger}
        icon={isOpen ? <Cross /> : <Burger />}
      />
      <Menu
        reference={reference}
        appearance={NavbarStyle.menu}
        isOpen={isOpen}
        makeOpen={toggleBurger}
      />
    </div>
  );
};
