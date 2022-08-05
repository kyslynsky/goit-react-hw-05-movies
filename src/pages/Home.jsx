import MoviesList from 'components/MoviesList';
import { useFetchTrending } from 'hooks/useFetchTrending';

const Home = () => {
  const [movies] = useFetchTrending();
  console.log(movies);

  return (
    <main>
      <div>
        <h1>Trending today</h1>
        {movies.length > 0 && <MoviesList data={movies} />}
      </div>
    </main>
  );
};

export default Home;
