import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/movies-api';
import { Notify } from 'notiflix';

export const useFetchTrending = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getTrendingMovies(page)
      .then(data => {
        setMovies([...data]);
        if (data.length === 0) {
          Notify.failure('We are sorry! There is no results', {
            clickToClose: true,
          });
          return;
        }
      })
      .catch(error => {
        Notify.failure(error.message, {
          clickToClose: true,
        });
      });
  }, [page]);

  return [movies];
};
