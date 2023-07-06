import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button } from '~/shared/ui/Button/Button';

import { type SearchState } from './Search.types';
import { getDefaultFormValues } from './Search.utils';
import SearchStyle from './SearchPanel.module.scss';

export const SearchPanel = () => {
  const [formState, setFormState] = useState<SearchState>(
    getDefaultFormValues()
  );
  const navigate = useNavigate();
  return (
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
  );
};
