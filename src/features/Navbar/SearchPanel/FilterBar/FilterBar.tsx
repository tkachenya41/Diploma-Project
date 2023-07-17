import { type RefObject } from 'react';

import { ReactComponent as CloseFilter } from '~/assets/icons/close.svg';
import { Button } from '~/shared/ui/Button/Button';
import { ButtonAppearance } from '~/shared/ui/Button/Button.types';

import FilterBarStyle from './FilterBar.module.scss';

export const FilterBar = ({
  isOpen,
  onFilterClose,
  reference
}: {
  isOpen: boolean;
  onFilterClose: () => void;
  reference: RefObject<HTMLDivElement>;
}) => {
  return (
    <div
      data-open={isOpen}
      ref={reference}
      className={FilterBarStyle.container}
    >
      <div className={FilterBarStyle.innerWrapper}>
        <p>Filters</p>
        <Button
          appearance={ButtonAppearance.Primary}
          icon={<CloseFilter />}
          onClick={onFilterClose}
        />
      </div>
      <div className={FilterBarStyle.footer}>
        <Button
          text="Clear Results"
          appearance={ButtonAppearance.Clear}
        ></Button>
        <Button
          text="Show Results"
          appearance={ButtonAppearance.Primary}
        ></Button>
      </div>
    </div>
  );
};
