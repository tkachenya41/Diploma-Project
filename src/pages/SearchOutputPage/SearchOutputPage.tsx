import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { fetchSearch } from '~/api/fetchSearch';
import { type CardAPI } from '~/entities/Card';
import { Cards } from '~/features/Cards/Cards';

import SearchStyle from './SearchOutputPage.module.scss';

export const SearchOutputPage = () => {
  const [card, setCard] = useState<CardAPI[]>([]);
  const [error, setError] = useState('');
  const [movieAll, setMovieAll] = useState<number>(1);

  const { request } = useParams<'request'>();
  useEffect(() => {
    fetchSearch({ request: request || '' })
      .then((data) => {
        setCard(data.docs);
        setMovieAll(data.total);
      })

      .catch((error: Error) => setError(error.message));
  }, [request]);
  return (
    <div className={SearchStyle.container}>
      {error && <div>{error}</div>}
      <div className={SearchStyle.textContainer}>
        <h2>search: {request}</h2>
        <h2>results: {movieAll} movies</h2>
      </div>
      {movieAll < 1 && (
        <>
          <img
            className={SearchStyle.sadSmile}
            src="/src/assets/icons/sadSmile.svg"
          ></img>
          <h1>
            Not Found... <hr /> Try again later
          </h1>
        </>
      )}
      <Cards card={card}></Cards>
    </div>
  );
};
