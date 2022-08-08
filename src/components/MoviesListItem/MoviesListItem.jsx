import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import pic from 'img/no-poster.jpg';
import {
  MovieItem,
  MovieLink,
  MovieTitle,
  MoviePoster,
} from './MoviesListItem.styled';

const MoviesListItem = ({ id, title, poster }) => {
  const location = useLocation();

  return (
    <MovieItem>
      <MovieLink to={`/movies/${id}`} state={{ from: location }}>
        <div>
          <MoviePoster
            src={poster ? `https://image.tmdb.org/t/p/w500${poster}` : pic}
            alt={title}
          />
        </div>
        <MovieTitle>{title ? title : 'No title here'}</MovieTitle>
      </MovieLink>
    </MovieItem>
  );
};

export default MoviesListItem;

MoviesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
};
