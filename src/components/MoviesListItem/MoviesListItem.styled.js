import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieItem = styled.li`
  /* box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px; */
  box-shadow: 0 4px 3px -4px lightblue;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    scale: 1.02;
  }
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;

  ${MovieItem}:hover &,
  ${MovieItem}:focus & {
    color: #d9514eff;
  }
`;

export const MovieTitle = styled.p`
  padding: 14px;
  font-weight: 500;
`;

export const MoviePoster = styled.img`
  border-radius: 4px 4px 0 0;
  object-fit: cover;
  height: 60vh;

  @media screen and (min-width: 425px) {
    height: 80vh;
  }

  @media screen and (min-width: 768px) {
    height: 70vh;
  }

  @media screen and (min-width: 1024px) {
    height: 65vh;
  }

  @media screen and (min-width: 1440px) {
    height: 60vh;
  }

  @media screen and (min-width: 2000px) {
    height: 25vh;
  }
`;
