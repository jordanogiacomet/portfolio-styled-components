import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ from, via, to }) => css`
    background: linear-gradient(to bottom right, ${from}, ${via}, ${to});
  `};
  border: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  padding: 1rem 1.25rem;
  border-radius: 10rem;
  width: 100%;
  transition: scale 0.2s ease-in-out;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:hover {
    transition: scale ease-in-out 0.2s;
    scale: calc(1.02);
  }

  &:focus {
    outline: none;
  }
`;
