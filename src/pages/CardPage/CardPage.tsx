import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { fetchMovie } from '~/api/fetchMovie';
import { type CardAPI } from '~/entities/Card';
import { Card } from '~/features/Cards/Card/Card';

export const CardPage = () => {
  const [card, setCard] = useState<CardAPI | null>(null);
  const { id } = useParams<'id'>();

  useEffect(() => {
    fetchMovie(id || '')
      .then((data) => setCard(data))
      .catch((error: Error) => error);
  }, [id]);

  return <>{card ? <Card card={card} /> : null}</>;
};
