import styled from 'styled-components';

export const CreditsList = styled.ul`
  @media screen and (min-width: 767px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px;
  }
`;
