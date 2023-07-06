import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { type CardAPI } from '~/entities/Card';

import { getRatingClass } from './Card.utils';
import CardStyle from './Cards.module.scss';

export const Cards = ({ card }: { card: CardAPI[] }) => {
  return (
    <div className={CardStyle.main}>
      {card.map((card) => (
        <div
          className={CardStyle.card}
          key={card.id}
        >
          <p
            className={`${classNames({
              [CardStyle.rating]: true,
              [CardStyle[getRatingClass(card.rating.kp)]]: true
            })}`}
          >
            {card.rating.kp.toFixed(1)}
          </p>
          <Link to={`/card/${card.id}`}>
            <div>
              {card.poster ? (
                <img src={card.poster.url}></img>
              ) : (
                <img src="/no-image.jpeg"></img>
              )}
            </div>
            {card.persons &&
              card.persons.map((person) => (
                <p key={person.id}>
                  {(person.enName && person.enName) || person.name}
                </p>
              ))}
            <h3>{card.alternativeName}</h3>
            <h3>{card.name}</h3>
            <p>
              {(card.year && `${card.year} | `) || ''}
              {card.genres.length > 0 ? `${card.genres[0].name} | ` : ''}
              {card.countries.length > 0 ? card.countries[0].name : ''}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};
