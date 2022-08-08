// import { useSearchParams } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox';
import MoviesList from 'components/MoviesList';
import { useFetchByQuery } from 'hooks/useFetchByQuery';

const SearchPage = () => {
  const [movies, error, setSearchParams] = useFetchByQuery();

  const handleSearchMovie = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox onSubmit={handleSearchMovie} />
      {movies.length > 0 && <MoviesList data={movies} />}
    </main>
  );
};

export default SearchPage;
