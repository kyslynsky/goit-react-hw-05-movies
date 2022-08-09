import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieBySearchQuery } from 'services/movies-api';
import { Notify } from 'notiflix';

export const useFetchByQuery = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);

  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '') return;

    getMovieBySearchQuery(searchQuery)
      .then(data => {
        if (data.length === 0) {
          Notify.warning('Sorry! No results mathing your request', {
            clickToClose: true,
          });
          setMovies([]);
          return;
        }

        setMovies(data);
      })
      .catch(error => {
        Notify.failure(error.message, {
          clickToClose: true,
        });
        setError(error.message);
      });
  }, [searchQuery]);

  return [movies, error, setSearchParams];
};
