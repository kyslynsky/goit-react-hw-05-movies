import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/movies-api';
import { stopLoader } from 'components/Loader';

export const useFetchCredits = () => {
  let { id } = useParams();
  const [credits, setCredits] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieCredits(id)
      .then(data => {
        if (data.length === 0) {
          setError('Not available');
          return;
        }

        setCredits(data);
      })
      .catch(error => setError(error.message))
      .finally(stopLoader());
  }, [id]);

  return [credits, error];
};
