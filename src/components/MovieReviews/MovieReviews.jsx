import { useFetchReviews } from 'hooks/useFetchReviews';
import { ErrorBlock } from 'components/Error/Error';

const MovieReviews = () => {
  const [reviews, error] = useFetchReviews();

  return (
    <>
      {error && <ErrorBlock message={error} />}
      <section>
        <ul>
          {reviews?.map(({ id, author, content }) => (
            <li key={id}>
              <h3>
                Author: <span>{author}</span>
              </h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default MovieReviews;
