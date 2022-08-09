import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const ReviewItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ReviewText = styled.p`
  color: #c1c1c1;
`;
