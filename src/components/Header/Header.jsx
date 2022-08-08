import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { startLoader, stopLoader } from 'components/Loader';
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
      <Suspense fallback={startLoader()}>
        <Outlet />
      </Suspense>
    </>
  );
};
