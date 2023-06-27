import SearchStyle from './SearchPanel.module.scss';

export const SearchPanel = () => {
  return (
    <input
      className={SearchStyle.search}
      type="search"
      placeholder="Search"
    />
  );
};
