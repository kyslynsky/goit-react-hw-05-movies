import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoArrowUndoOutline } from 'react-icons/io5';

export const BackBtn = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
  color: #2da8d8ff;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: #d9514eff;
  }
`;

export const BackIco = styled(IoArrowUndoOutline)`
  margin-right: 5px;
  width: 26px;
  height: 26px;
`;
