import styled from 'styled-components';

export const CreditsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export const CreditItem = styled.li`
  padding: 35px;
`;
