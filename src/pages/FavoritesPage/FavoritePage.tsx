import { ReactComponent as NoFavorites } from '~/assets/icons/nofavorites.svg';

import FavoriteStyle from './Favorites.module.scss';

export const FavoritePage = () => {
  return (
    <div className={FavoriteStyle.wrapper}>
      <NoFavorites></NoFavorites>
    </div>
  );
};
