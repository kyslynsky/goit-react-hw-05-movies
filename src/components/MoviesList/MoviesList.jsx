import MoviesListItem from 'components/MoviesListItem';
import { Container } from 'components/GlobalStyles';
import { List } from './MoviesList.styled';

const MoviesList = ({ data }) => {
  return (
    <Container>
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
    </Container>
  );
};

export default MoviesList;
