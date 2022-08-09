import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/movies-api';
import { Notify } from 'notiflix';

export const useFetchMovieById = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieDetails(id)
      .then(details => {
        if (details.length === 0) {
          Notify.warning('We are sorry! There is no additional info', {
            clickToClose: true,
          });
          setMovie(null);
          return;
        }

        setMovie(details);
      })
      .catch(error => {
        Notify.failure(error.message, {
          clickToClose: true,
        });
        setError(error.message);
      });
  }, [id]);

  return [movie, error];
};
