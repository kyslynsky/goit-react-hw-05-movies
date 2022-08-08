import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/movies-api';
import { Notify } from 'notiflix';
import { stopLoader } from 'components/Loader';

export const useFetchTrending = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTrendingMovies(page)
      .then(data => {
        if (data.length === 0) {
          Notify.warning('We are sorry! There is no results', {
            clickToClose: true,
          });
          return;
        }

        setMovies([...data]);
      })
      .catch(error => {
        Notify.failure(error.message, {
          clickToClose: true,
        });
        setError(error.message);
      })
      .finally(stopLoader());
  }, [page]);

  return [movies, error];
};
