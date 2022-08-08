import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from 'components/GlobalStyles';
import pic from 'img/no-poster.jpg';
import { Section } from './MovieDetails.styled';

const MovieDetails = ({ movieInfo }) => {
  const {
    overview = 'No description',
    poster_path,
    title = 'No title here',
    vote_average = 'Nobody make a vote',
    genres = 'In process...',
    release_date = 'Release date has lost',
  } = movieInfo;

  const releaseYear = release_date.slice(0, 4);
  const movieGenres = genres.map(genre => genre.name).join(', ');

  return (
    <Container>
      <Section>
        <div>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : pic
            }
            alt={title}
          />
        </div>
        <div>
          <h1>
            {title}
            <span> ({releaseYear})</span>
          </h1>
          <ul>
            <li>
              <p>Vote Average:</p>
              <p>{vote_average}</p>
            </li>
            <li>
              <p>Genres:</p>
              <p>{movieGenres}</p>
            </li>
            <li>
              <p>Overview:</p>
              <p>{overview}</p>
            </li>
          </ul>
        </div>
      </Section>

      <section>
        <div>
          <h3>Additional information</h3>
        </div>
        <ul>
          <li>
            <Link to="credits">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </section>
      <Suspense fallback={<div>Loading!</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  movieInfo: PropTypes.shape({
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.array,
    release_date: PropTypes.string,
  }),
};
