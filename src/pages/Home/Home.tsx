import { useEffect, useState } from 'react';

import { fetchMovies } from '~/api/fetchMovies';
import { type CardAPI } from '~/entities/Card';
import { Cards } from '~/features/Cards/Cards';

import HomeStyle from './Home.module.scss';

export const Home = () => {
  const [card, setCard] = useState<CardAPI[] | []>([]);
  const [error, setError] = useState('');
  useEffect(() => {
    fetchMovies()
      .then((data) => setCard(data.docs))
      .catch((error: Error) => setError(error.message));
  }, []);
  return (
    <>
      {error ? (
        <div className={HomeStyle.error}>{error}</div>
      ) : (
        <Cards card={card}></Cards>
      )}
    </>
  );
};
