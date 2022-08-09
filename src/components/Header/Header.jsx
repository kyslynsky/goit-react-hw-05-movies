import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { Container } from 'components/GlobalStyles';
import {
  HeaderWrapper,
  NavBar,
  NavItem,
  HomeIco,
  SearchIco,
} from './Header.styled';

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Container>
          <NavBar>
            <NavItem to="/">
              <HomeIco />
              Home
            </NavItem>
            <NavItem to="movies">
              <SearchIco />
              Movies
            </NavItem>
          </NavBar>
        </Container>
      </HeaderWrapper>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
