import PropTypes from 'prop-types';
import { useState } from 'react';
import { Notify } from 'notiflix';
import { BtnIco, SearchForm, Input, SearchBtn } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query === '') {
      Notify.warning('Enter the search query please', {
        clickToClose: true,
      });
      return;
    }
    onSubmit(query.trim());
    setQuery('');
  };

  return (
      <SearchForm onSubmit={handleSubmit}>
        <Input
          value={query}
          onChange={handleInputChange}
          autoFocus
          type="text"
          placeholder="Want to find something?"
        />
        <SearchBtn type="submit">
          Seacrh
          <BtnIco />
        </SearchBtn>
      </SearchForm>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
