import styled from 'styled-components';

export const Section = styled.section`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: minmax(10px, 1fr) 3fr;
  }
`;
