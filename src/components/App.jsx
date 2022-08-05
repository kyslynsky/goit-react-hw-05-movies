import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { GlobalStyle } from './GlobalStyles';
import { Header } from 'components/Header';

const Home = lazy(() => import('pages/Home'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<div>Movies</div>} />
          <Route
            path="movies/movies/:id"
            element={<div>Movie {`id`} info</div>}
          />
          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
