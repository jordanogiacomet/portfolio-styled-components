import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid #b0b0b0;
  border-radius: 0.375rem;
  background: none;
  color: #b0b0b0;
  cursor: pointer;
  &:hover {
    color: white;
    border-color: white;
  }

  > svg {
    width: 2rem;
    height: 2rem;
  }
`;

