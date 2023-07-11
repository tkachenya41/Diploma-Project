import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as SwitchOff } from '~/assets/icons/Switch-off.svg';
import { ReactComponent as SwitchOn } from '~/assets/icons/Switch-on.svg';
import { Button } from '~/shared/ui/Button/Button';
import { ButtonAppearance } from '~/shared/ui/Button/Button.types';
import { type RootState } from '~/store/store.types';
import { AppTheme } from '~/store/theme/theme.constants';
import { themeActions } from '~/store/theme/theme.slice';

import SettingStyle from './SettingsPage.module.scss';

export const SettingsPage = () => {
  const theme = useSelector((state: RootState) => state.changeTheme.appearance);
  const dispatch = useDispatch();
  return (
    <div className={SettingStyle.container}>
      <h3>Color Mode</h3>
      <div className={SettingStyle.theme}>
        <div className={SettingStyle.text}>
          <h4>Light</h4>
          <p>Use Light Theme</p>
        </div>
        <Button
          appearance={ButtonAppearance.Transparent}
          icon={theme === AppTheme.Dark ? <SwitchOff /> : <SwitchOn />}
          onClick={() => {
            theme === AppTheme.Light
              ? dispatch(themeActions.changeTheme(AppTheme.Dark))
              : dispatch(themeActions.changeTheme(AppTheme.Light));
          }}
        ></Button>
      </div>
    </div>
  );
};
