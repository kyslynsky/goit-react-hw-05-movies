import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FiFilm } from 'react-icons/fi';
import { FiSearch } from 'react-icons/fi';

export const HeaderWrapper = styled.header`
  margin-bottom: 40px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const NavBar = styled.nav`
  padding: 15px 0px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, 80px);
  grid-gap: 20px;
  justify-items: center;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 7px 17px;
  font-size: 1rem;
  font-weight: 500;
  line-height: normal;
  color: #fff;
  transition: all 0.2s ease-in-out;

  &.active {
    color: #2da8d8ff;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #d9514eff;
  }
`;

export const HomeIco = styled(FiFilm)`
  width: 14px;
  height: 100%;
  margin-right: 5px;
`;

export const SearchIco = styled(FiSearch)`
  width: 14px;
  height: 100%;
  margin-right: 5px;
`;
