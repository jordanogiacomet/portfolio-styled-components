import styled from 'styled-components';

export const Container = styled.button`
  background: linear-gradient(to bottom right, #1E90FF, #4169E1, #00008B);
  color: white;
  font-weight: 500;
  padding: 0.625rem 1.25rem;
  border-radius: 10rem;
  width: 100%;
  transition: scale 0.2s ease-in-out;

  &:hover {
    background-color: #4169E1;
    transition: scale ease-in-out 0.2s;
    scale: calc(1.02);
  }

  &:focus {
    outline: none;
    
    box-shadow: 0 0 0 3px rgba(30, 144, 255, 0.5); /* Optional: change focus outline */
  }
`;
