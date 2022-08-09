import PropTypes from 'prop-types';
import MoviesListItem from 'components/MoviesListItem';
import { List } from './MoviesList.styled';

const MoviesList = ({ data }) => {
  return (
    <List>
      {data.map(({ id, original_title, poster_path }) => {
        return (
          <MoviesListItem
            key={id}
            id={id}
            title={original_title}
            poster={poster_path}
          />
        );
      })}
    </List>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};
