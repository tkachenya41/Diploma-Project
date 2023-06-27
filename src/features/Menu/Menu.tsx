import { NavLink } from 'react-router-dom';

import { ReactComponent as FavIcon } from '~/assets/icons/favorites.svg';
import { ReactComponent as HomeIcon } from '~/assets/icons/home.svg';
import { ReactComponent as SettingsIcon } from '~/assets/icons/settings.svg';
import { ReactComponent as TrendIcon } from '~/assets/icons/trends.svg';

import menuStyle from './Menu.module.scss';
import { Navlinks } from '../Navbar/navbar.constants';

export const Menu = () => {
  return (
    <div className={menuStyle.linksList}>
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
    </div>
  );
};