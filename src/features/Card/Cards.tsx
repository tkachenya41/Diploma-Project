import { type CardAPI } from '~/entities/Card';

import CardStyle from './Card.module.scss';

export const Cards = ({ card }: { card: CardAPI[] }) => {
  return (
    <div className={CardStyle.container}>
      {card.map((card) => (
        <div
          className={CardStyle.card}
          key={card.id}
        >
          {card.name}
          <div>
            <img src={card.poster.url}></img>
          </div>
        </div>
      ))}
    </div>
  );
};
