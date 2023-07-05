import { useState } from 'react';

import { Link } from 'react-router-dom';

import { Button } from '~/shared/ui/Button/Button';

import { type SearchState } from './Search.types';
import { getDefaultFormValues } from './Search.utils';
import SearchStyle from './SearchPanel.module.scss';

export const SearchPanel = () => {
  const [formState, setFormState] = useState<SearchState>(
    getDefaultFormValues()
  );
  return (
    <form
      className={SearchStyle.form}
      onSubmit={(event) => {
        event.preventDefault();
        setFormState(getDefaultFormValues);
      }}
    >
      <input
        className={SearchStyle.search}
        type="search"
        value={formState.request}
        placeholder="Search"
        onChange={({ target: { value } }) => {
          setFormState({ request: value });
        }}
      />
      <Link to={`/search/${formState.request}`}>
        <Button
          type="submit"
          onClick={() => setFormState(getDefaultFormValues)}
        ></Button>
      </Link>
    </form>
  );
};
