import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: minmax(10px, 1fr) 3fr;
    grid-gap: 25px;
    margin: 20px 0;
  }
`;

export const DecsItem = styled.li`
  display: grid;
  gap: 16px;
  grid-auto-flow: column;
  grid-template-columns: 150px 1fr;
  margin-top: 10px;
`;

export const DescTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #c1c1c1;
`;

export const SectionAdditional = styled.section`
  margin-bottom: 20px;
`;

export const LinkList = styled.ul`
  margin-top: 20px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, 100px);
`;

export const LinkItem = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #2da8d8ff;
  font-size: 1.2rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: #d9514eff;
  }
`;