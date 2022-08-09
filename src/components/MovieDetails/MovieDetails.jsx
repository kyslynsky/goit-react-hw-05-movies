import PropTypes from 'prop-types';
import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { Container } from 'components/GlobalStyles';
import pic from 'img/no-poster.jpg';
import {
  Section,
  DecsItem,
  DescTitle,
  SectionAdditional,
  LinkList,
  LinkItem,
} from './MovieDetails.styled';

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

  const location = useLocation();

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
            <DecsItem>
              <DescTitle>Vote Average:</DescTitle>
              <p>{vote_average}</p>
            </DecsItem>
            <DecsItem>
              <DescTitle>Genres:</DescTitle>
              <p>{movieGenres}</p>
            </DecsItem>
            <DecsItem>
              <DescTitle>Overview:</DescTitle>
              <p>{overview}</p>
            </DecsItem>
          </ul>
        </div>
      </Section>

      <SectionAdditional>
        <div>
          <h2>Additional information</h2>
        </div>
        <LinkList>
          <li>
            <LinkItem to="credits" state={location.state}>
              Cast
            </LinkItem>
          </li>
          <li>
            <LinkItem to="reviews" state={location.state}>
              Reviews
            </LinkItem>
          </li>
        </LinkList>
      </SectionAdditional>
      <Suspense fallback={<Loader />}>
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
