import styled from 'styled-components';

export const Container = styled.button`
  padding: 1rem;
  background-color: transparent;
  box-shadow: none;
  border: 2px solid #ADB7BE;
  border-radius: 9999px;
  color: #ADB7BE;
  font-size: 1.2rem;
  right: 2.5rem;
  margin-right: 2rem;
  @media(max-width: 768px) {
    bottom: 20px;
  }
  &.light{
    color: white;
    border-color: white;
    &:hover{
      color: #CCCCCC;
      border-color: #CCCCCC;
    }
  }
  cursor: pointer;
  transition: 0.2s;
  &:hover{
    color: #4169E1;
    border-color: #4169E1;
  }
`;
