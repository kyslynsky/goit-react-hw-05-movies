import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { GlobalStyle } from './GlobalStyles';
import { Header } from 'components/Header';

const Home = lazy(() => import('pages/Home'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const MovieCredits = lazy(() => import('components/MovieCredits'));
const MovieReviews = lazy(() => import('components/MovieReviews'));
const SearchPage = lazy(() => import('pages/SearchPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<SearchPage />} />
          <Route path="movies/:id" element={<MovieDetailsPage />}>
            <Route path="credits" element={<MovieCredits />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
