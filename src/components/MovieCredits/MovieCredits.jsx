import { useFetchCredits } from 'hooks/useFetchCredits';
import pic from 'img/no-poster.jpg';
import { CreditsList, CreditItem } from './MovieCredits.styled';
import { ErrorBlock } from 'components/Error';

const MovieCredits = () => {
  const [credits, error] = useFetchCredits();

  return (
    <section>
      {error && <ErrorBlock message={error} />}
      <CreditsList>
        {credits?.map(({ id, name, profile_path, character }) => (
          <CreditItem key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : pic
              }
              alt={name}
            />
            <p>{name}</p>
            <p>
              Character: <span>{character}</span>
            </p>
          </CreditItem>
        ))}
      </CreditsList>
    </section>
  );
};

export default MovieCredits;
