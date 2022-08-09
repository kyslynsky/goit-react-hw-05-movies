import { SearchBox } from 'components/SearchBox';
import MoviesList from 'components/MoviesList';
import { useFetchByQuery } from 'hooks/useFetchByQuery';
import { ErrorBlock } from 'components/Error/Error';
import { Container } from 'components/GlobalStyles';

const SearchPage = () => {
  const [movies, error, setSearchParams] = useFetchByQuery();

  const handleSearchMovie = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <Container>
      <main>
        {error && <ErrorBlock message={error} />}
        <SearchBox onSubmit={handleSearchMovie} />
        {movies.length > 0 && <MoviesList data={movies} />}
      </main>
    </Container>
  );
};

export default SearchPage;
