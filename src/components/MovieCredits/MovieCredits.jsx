import { useFetchCredits } from 'hooks/useFetchCredits';
import pic from 'img/no-poster.jpg';
import { CreditsList } from './MovieCredits.styled';

const MovieCredits = () => {
  const [credits, error] = useFetchCredits();

  return (
    <section>
      <CreditsList>
        {credits?.map(({ id, name, profile_path, character }) => (
          <li key={id}>
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
          </li>
        ))}
      </CreditsList>
    </section>
  );
};

export default MovieCredits;
