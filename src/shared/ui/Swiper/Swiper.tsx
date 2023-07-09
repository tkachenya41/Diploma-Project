import { useEffect, useState } from 'react';

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { type CardAPI } from '~/entities/Card';

import SwiperStyle from './Swiper.module.scss';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Swipe.scss';

export const Slider = ({ card }: { card: CardAPI }) => {
  const [slidesPerView, setSlidesPerView] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200) {
        setSlidesPerView(3);
      }
    };

    window.addEventListener('resize', handleResize);

    // Убираем слушатель события при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Swiper
      className={SwiperStyle.container}
      slidesPerView={slidesPerView}
      spaceBetween={5}
      zoom={true}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      scrollbar={{ draggable: true }}
      pagination={{ clickable: true }}
      navigation
    >
      {card.persons.map(
        (person) =>
          person.enProfession === 'actor' && (
            <SwiperSlide
              key={person.id}
              className={SwiperStyle.slide}
            >
              <img
                className={SwiperStyle.actorPhoto}
                src={person.photo}
              ></img>
              <span className={SwiperStyle.actors}>{person.name}</span>
            </SwiperSlide>
          )
      )}
    </Swiper>
  );
};
