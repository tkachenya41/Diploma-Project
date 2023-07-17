import { useEffect, useState } from 'react';

import { fetchTrend } from '~/api/fetchTrends';
import { type CardAPI } from '~/entities/Card';
import { Cards } from '~/features/Cards/Cards';
import { Button } from '~/shared/ui/Button/Button';
import { ButtonAppearance } from '~/shared/ui/Button/Button.types';

import TrendsPageStyle from './TrendsStyle.module.scss';

export const TrendsPage = () => {
  const [card, setCard] = useState<CardAPI[]>([]);
  const [error, setError] = useState('');
  const [movieAll, setMovieAll] = useState<number>(1);
  const [limit, setLimit] = useState<number>(8);

  const handleShowMore = () => {
    setLimit((previousMovies) => previousMovies + 8);
  };
  useEffect(() => {
    fetchTrend({ limit: limit })
      .then((data) => {
        setCard(data.docs);
        setLimit(data.limit);
        setMovieAll(data.total);
      })
      .catch((error: Error) => setError(error.message));
  }, [limit]);

  return (
    <div className={TrendsPageStyle.wrapper}>
      {error ? (
        <div>{error}</div>
      ) : (
        <div className={TrendsPageStyle.container}>
          <Cards card={card} />
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
      )}
    </div>
  );
};
