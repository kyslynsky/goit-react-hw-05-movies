import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/movies-api';
import { Notify } from 'notiflix';

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
        setPage(page);
      })
      .catch(error => {
        Notify.failure(error.message, {
          clickToClose: true,
        });
        setError(error.message);
      })
  }, [page]);

  return [movies, error];
};
// Add return page to handle pagination 