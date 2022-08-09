import { useLocation } from 'react-router-dom';
import { useFetchMovieById } from 'hooks/useFetchMovieById';
import MovieDetails from 'components/MovieDetails';
import { BackLink } from 'components/BackLink';
import { ErrorBlock } from 'components/Error';

const MovieDetailsPage = () => {
  const [movie, error] = useFetchMovieById();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  return (
    <>
      <BackLink to={backLink}>Back to previous</BackLink>
      {movie && <MovieDetails movieInfo={movie} />}
      {error && <ErrorBlock message={error} />}
    </>
  );
};

export default MovieDetailsPage;
