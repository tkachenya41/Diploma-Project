import { Outlet } from 'react-router-dom';

import { Menu } from '~/features/Menu/Menu';
import { Navbar } from '~/features/Navbar/Navbar';

import MainStyle from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <>
      <div className={MainStyle.wrapper}>
        <div className={MainStyle.container}>
          <Navbar />
          <main className={MainStyle.main}>
            <Menu />
            <Outlet />
          </main>
        </div>
        <div className={MainStyle.footer}>© All Rights Reserved</div>
      </div>
    </>
  );
};
