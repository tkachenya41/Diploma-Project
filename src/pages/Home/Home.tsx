import { useEffect, useState } from 'react';

import { fetchMovies } from '~/api/fetchMovies';
import { type CardAPI } from '~/entities/Card';
import { Cards } from '~/features/Cards/Cards';
import { Button } from '~/shared/ui/Button/Button';
import { ButtonAppearance } from '~/shared/ui/Button/Button.types';

import HomeStyle from './Home.module.scss';

export const Home = () => {
  const [card, setCard] = useState<CardAPI[] | []>([]);
  const [limit, setLimit] = useState<number>(8);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMovies({ limit: limit })
      .then((data) => {
        setCard(data.docs);
        setLimit(data.limit);
      })
      .catch((error: Error) => setError(error.message));
  }, [limit]);

  const handleShowMore = () => {
    setLimit((previousMovies) => previousMovies + 8);
  };

  return (
    <>
      {error ? (
        <div className={HomeStyle.error}>{error}</div>
      ) : (
        <div className={HomeStyle.container}>
          <Cards card={card}></Cards>
          <Button
            appearance={ButtonAppearance.Primary}
            text="Show more"
            onClick={handleShowMore}
          ></Button>
        </div>
      )}
    </>
  );
};
