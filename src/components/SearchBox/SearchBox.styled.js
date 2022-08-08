import styled from 'styled-components';
import { SiThemoviedatabase } from 'react-icons/si';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 50vw;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 1rem;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`;

export const SearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  background-color: #2da8d8ff;
  outline: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: #d9514eff;
  }
`;

export const BtnIco = styled(SiThemoviedatabase)`
  width: 26px;
  height: 26px;
  margin-left: 5px;
`;
