import styled from 'styled-components';

export const Container = styled.input`
  background: #18191E;
  border: 1px solid #33353F;
  color: #9CA2A9;
  font-size: 1.5rem;; /* text-sm */
  border-radius: 0.5rem;
  width: 100%;
  padding: 1.5rem; /* p-2.5 */
  display: block;

  &:focus {
    outline: none;
    border-color: #1E90FF;
  }

  &::placeholder {
    color: #9CA2A9;
    font-size: 1.5rem;
  }
`;