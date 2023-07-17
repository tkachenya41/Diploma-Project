import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { ReactComponent as FilterIcon } from '~/assets/icons/filter.svg';
import { useOutsideClick } from '~/hooks/UseOutsideClick/UseOutsideClick';
import { Button } from '~/shared/ui/Button/Button';
import { ButtonAppearance } from '~/shared/ui/Button/Button.types';

import { FilterBar } from './FilterBar/FilterBar';
import { type SearchState } from './Search.types';
import { getDefaultFormValues } from './Search.utils';
import SearchStyle from './SearchPanel.module.scss';

export const FilterButton = ({
  onFilterOpen
}: {
  onFilterOpen: () => void;
}) => {
  return (
    <Button
      onClick={onFilterOpen}
      className={SearchStyle.filter}
      appearance={ButtonAppearance.Filter}
      icon={<FilterIcon />}
    ></Button>
  );
};

export const SearchPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleFilterOpen = () => {
    setIsOpen((hasBeenOpened) => !hasBeenOpened);
  };
  const handleFilterClose = () => {
    setIsOpen(false);
  };

  const reference = useOutsideClick(() => {
    isOpen ? handleFilterOpen() : null;
  });

  const [formState, setFormState] = useState<SearchState>(
    getDefaultFormValues()
  );

  const navigate = useNavigate();
  return (
    <div className={SearchStyle.wrapper}>
      <form
        className={SearchStyle.form}
        onSubmit={(event) => {
          event.preventDefault();
          navigate(`/search/${formState.request}`);
          setFormState(getDefaultFormValues);
        }}
      >
        <input
          className={SearchStyle.search}
          value={formState.request}
          placeholder="Search"
          onChange={({ target: { value } }) => {
            setFormState({ request: value });
          }}
        />
        <Button type="submit"></Button>
      </form>
      <FilterButton onFilterOpen={handleFilterOpen}></FilterButton>
      <FilterBar
        reference={reference}
        isOpen={isOpen}
        onFilterClose={handleFilterClose}
      ></FilterBar>
    </div>
  );
};
