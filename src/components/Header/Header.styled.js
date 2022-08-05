import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.nav`
  padding: 20px 0px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, 80px);
  grid-gap: 20px;
  justify-items: center;
`;

export const NavItem = styled(NavLink)`
  padding: 7px 17px;
  font-size: 1rem;
  font-weight: 500;
  line-height: normal;
  color: #fff;

  &.active {
    color: #2da8d8ff;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #d9514eff;
  }
`;
