import styled from 'styled-components';

export const Container = styled.textarea`
  background-color: #18191E;
  border: 1px solid #33353F;
  color: #9CA2A9;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  display: block;
  width: 100%;
  padding: 1.5rem;
  resize: vertical; /* Optional: allows the user to resize the textarea vertically */
  height: 200px;


  &::placeholder {
    color: #9CA2A9;
    font-size: 1.5rem;
  }

  &:focus {
    outline: none;
    border-color: #1E90FF; /* Optional: change border color on focus */
  }
`;
