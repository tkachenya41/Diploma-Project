import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { fetchSearch } from '~/api/fetchSearch';
import { type CardAPI } from '~/entities/Card';
import { Cards } from '~/features/Cards/Cards';
import { Button } from '~/shared/ui/Button/Button';
import { ButtonAppearance } from '~/shared/ui/Button/Button.types';

import SearchStyle from './SearchOutputPage.module.scss';

export const SearchOutputPage = () => {
  const [card, setCard] = useState<CardAPI[]>([]);
  const [limit, setLimit] = useState<number>(8);
  const [error, setError] = useState('');
  const [movieAll, setMovieAll] = useState<number>(1);

  const { request } = useParams<'request'>();
  useEffect(() => {
    fetchSearch({ request: request || '', limit: limit })
      .then((data) => {
        setCard(data.docs);
        setMovieAll(data.total);
        setLimit(data.limit);
      })

      .catch((error: Error) => setError(error.message));
  }, [request, limit]);

  const handleShowMore = () => setLimit((previousMovies) => previousMovies + 8);
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
            src="/sadSmile.svg"
          ></img>
          <h1>
            Not Found... <hr /> Try again later
          </h1>
        </>
      )}
      <div className={SearchStyle.main}>
        <Cards card={card}></Cards>
        {(movieAll > limit && (
          <Button
            appearance={ButtonAppearance.Primary}
            text="Show more"
            onClick={handleShowMore}
          ></Button>
        )) || (
          <Button
            text="Show more"
            disabled
          ></Button>
        )}
      </div>
    </div>
  );
};
