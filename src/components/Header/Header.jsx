import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/GlobalStyles';
import { NavBar, NavItem } from './Header.styled';

export const Header = () => {
  return (
    <>
      <header>
        <Container>
          <NavBar>
            <NavItem to="/">Home</NavItem>
            <NavItem to="movies">Movies</NavItem>
          </NavBar>
        </Container>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
