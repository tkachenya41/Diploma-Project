import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { ReactComponent as ArrowDown } from '~/assets/icons/arrowDown.svg';
import { ReactComponent as ArrowRight } from '~/assets/icons/arrowRight.svg';
import { ReactComponent as User } from '~/assets/icons/user.svg';
import { Button } from '~/shared/ui/Button/Button';
import { ButtonAppearance } from '~/shared/ui/Button/Button.types';

import { UserBar } from './UserBar/UserBar';
import userPanelStyle from './UserPanel.module.scss';

export const UserPanel = () => {
  const [isOpenUserBar, setIsOpenUserBar] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleUserBar = () =>
    setIsOpenUserBar((hasBeenOpened) => !hasBeenOpened);
  return (
    <div className={userPanelStyle.container}>
      <Button
        appearance={ButtonAppearance.Primary}
        icon={<User />}
        onClick={() => navigate(`/sign-in`)}
      ></Button>
      <span className={userPanelStyle.userText}></span>
      <Button
        appearance={ButtonAppearance.Arrow}
        onClick={toggleUserBar}
        icon={isOpenUserBar ? <ArrowRight /> : <ArrowDown />}
      ></Button>

      <UserBar isOpen={isOpenUserBar} />
    </div>
  );
};
