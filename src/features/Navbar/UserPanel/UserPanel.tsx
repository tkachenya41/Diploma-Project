import { Button } from '~/shared/ui/Button/Button';
import { ButtonAppearance } from '~/shared/ui/Button/Button.types';

import userPanelStyle from './UserPanel.module.scss';

export const UserPanel = () => {
  return (
    <div className={userPanelStyle.container}>
      <Button
        appearance={ButtonAppearance.Primary}
        text={'RT'}
      ></Button>
      <span className={userPanelStyle.userText}>Roman Tkachenya</span>
    </div>
  );
};
