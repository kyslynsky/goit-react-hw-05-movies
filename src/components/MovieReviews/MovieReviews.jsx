import { useFetchReviews } from 'hooks/useFetchReviews';
import { ErrorBlock } from 'components/Error/Error';
import { ReviewsList, ReviewItem, ReviewText } from './MovieReviews.styled';

const MovieReviews = () => {
  const [reviews, error] = useFetchReviews();

  return (
    <section>
      {error && <ErrorBlock message={error} />}
      <ReviewsList>
        {reviews?.map(({ id, author, content }) => (
          <ReviewItem key={id}>
            <h3>
              Author: <span>{author}</span>
            </h3>
            <ReviewText>{content}</ReviewText>
          </ReviewItem>
        ))}
      </ReviewsList>
    </section>
  );
};

export default MovieReviews;
