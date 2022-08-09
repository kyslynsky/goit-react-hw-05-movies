import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movies-api';

export const useFetchReviews = () => {
  let { id } = useParams();
  const [reviews, setReviews] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieReviews(id)
      .then(data => {
        if (data.length === 0) {
          setError('Currently doesn`t got one');
          return;
        }

        setReviews(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [id]);

  return [reviews, error];
};
