import MoviesList from 'components/MoviesList';
import { useFetchTrending } from 'hooks/useFetchTrending';
import { Container } from 'components/GlobalStyles';
const Home = () => {
  const [movies] = useFetchTrending();

  return (
    <Container>
      <main>
        <h1>Trending today</h1>
        {movies.length > 0 && <MoviesList data={movies} />}
      </main>
    </Container>
  );
};

export default Home;
