import './App.styles.scss';
import { ReactComponent as Favorites } from '~/assets/icons/favorites.svg';

import { SearchPanel } from './features/Navbar/SearchPanel/SearchPanel';
import { Button } from './shared/ui/Button/Button';
import { ButtonAppearance } from './shared/ui/Button/Button.types';

export const App = () => {
  return (
    <>
      <Button
        appearance={ButtonAppearance.Secondary}
        icon={<Favorites />}
      ></Button>
      <Button text="Primary"></Button>
      <Button
        appearance={ButtonAppearance.Secondary}
        text="Secondary"
      ></Button>
      <SearchPanel />
    </>
  );
};
