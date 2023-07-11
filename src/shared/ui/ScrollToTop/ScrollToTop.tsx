import { useEffect, useState } from 'react';

import { ReactComponent as ScrollIcon } from '~/assets/icons/scrollTop.svg';

import ScrollStyle from './ScrollToTop.module.scss';

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export const ScrollToTop = () => {
  const [isShowScroll, setIsShowScroll] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setIsShowScroll(true);
    } else {
      setIsShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isShowScroll ? (
        <ScrollIcon
          onClick={scrollTop}
          className={ScrollStyle.icon}
        ></ScrollIcon>
      ) : null}
    </div>
  );
};
