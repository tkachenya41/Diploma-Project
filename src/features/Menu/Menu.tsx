import { type RefObject } from 'react';

import { NavLink } from 'react-router-dom';

import { ReactComponent as FavIcon } from '~/assets/icons/favorites.svg';
import { ReactComponent as HomeIcon } from '~/assets/icons/home.svg';
import { ReactComponent as SettingsIcon } from '~/assets/icons/settings.svg';
import { ReactComponent as TrendIcon } from '~/assets/icons/trends.svg';

import menuStyle from './Menu.module.scss';
import { Navlinks } from '../Navbar/navbar.constants';
import { UserBar } from '../Navbar/UserPanel/UserBar/UserBar';

export const Menu = ({
  appearance = menuStyle.linksList,
  isOpen,
  makeOpen,
  reference
}: {
  appearance?: string;
  isOpen?: boolean;
  makeOpen?: () => void;
  reference?: RefObject<HTMLDivElement>;
}) => {
  return (
    <div
      className={appearance}
      data-open={isOpen}
      onClick={makeOpen}
      ref={reference}
    >
      {Navlinks.map((link) => (
        <NavLink
          className={menuStyle.link}
          to={link.path}
          key={link.path}
        >
          {link.title === 'Home' ? (
            <HomeIcon />
          ) : link.title === 'Trends' ? (
            <TrendIcon />
          ) : link.title === 'Favorites' ? (
            <FavIcon />
          ) : link.title === 'Settings' ? (
            <SettingsIcon />
          ) : null}
          {link.title}
        </NavLink>
      ))}
      <div className={menuStyle.UserBar}>
        <UserBar></UserBar>
      </div>
    </div>
  );
};
