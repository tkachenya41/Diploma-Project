import classNames from 'classnames';

import { type CardAPI } from '~/entities/Card';

import CardStyle from './Card.module.scss';
import { getRatingClass } from '../Card.utils';

export const Card = ({ card }: { card: CardAPI }) => {
  return (
    <>
      {card ? (
        <div className={CardStyle.container}>
          <div>
            {(card.poster && <img src={card.poster.url}></img>) || (
              <img src="/src/assets/icons/no-image.jpeg"></img>
            )}
          </div>
          <div className={CardStyle.text}>
            <span className={CardStyle.genres}>
              {card.genres &&
                card.genres
                  .map(
                    (genre) =>
                      genre.name.charAt(0).toUpperCase() + genre.name.slice(1)
                  )
                  .join(' • ')}
            </span>
            <h1>{card.alternativeName}</h1>
            <h2>{card.name}</h2>
            <div className={CardStyle.rating}>
              <p
                className={`${classNames({
                  [CardStyle.defaultRating]: true,
                  [CardStyle[getRatingClass(card.rating.kp)]]: true
                })}`}
              >
                {card.rating.kp.toFixed(1)}
              </p>
              {card.movieLength && (
                <p className={CardStyle.movieLength}>{card.movieLength} min</p>
              )}
            </div>
            <p className={CardStyle.description}>{card.description}</p>
            <div className={CardStyle.totalInfo}>
              <div className={CardStyle.info}>
                <span>Year </span>
                <span>{card.year}</span>
              </div>
              <div className={CardStyle.info}>
                <span>Country </span>
                <span>
                  {card.countries &&
                    card.countries.map((country) => country.name)}
                </span>
              </div>
              <div className={CardStyle.info}>
                <span>Actors </span>
                <span>
                  {card.persons &&
                    card.persons.map((person) => person.name).join(', ')}
                </span>
              </div>
              <div className={CardStyle.info}>
                <span>Budget </span>
                {(card.budget.value && (
                  <span>${card.budget.value.toLocaleString()}</span>
                )) ||
                  '-'}
              </div>
              <div className={CardStyle.info}>
                <span>Production </span>
                <span>
                  {card.productionCompanies &&
                    card.productionCompanies
                      .map((production) => production.name)
                      .join(', ')}
                </span>
              </div>
              <div className={CardStyle.info}>
                <span>Age Rating </span>
                <span>{card.ageRating}+</span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
