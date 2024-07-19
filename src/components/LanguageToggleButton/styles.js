import styled from 'styled-components';

export const Container = styled.button`
  padding: 1rem;
  background-color: transparent;
  box-shadow: none;
  border: 1px solid gray;
  border-radius: 9999px;
  color: white;
  font-size: 1.2rem;
  position: absolute;
  right: 2.5rem;
  cursor: pointer;
  transition: 0.2s;
  &:hover{
    color: #4169E1;
    border-color: #4169E1;
  }
`;
