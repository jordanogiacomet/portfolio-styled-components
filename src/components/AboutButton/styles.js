import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({primaryColor}) => css`
    color: ${primaryColor};
  `}
  background: transparent;
  position: relative;
  border: none;
  
  margin-right: 12px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  &.light{
    color: black;
    ${({ active, color }) =>
    active &&
    css`
      color: ${color};
      &::after{
        width: 100%;
      }
    `}
  }
  &:hover {
    ${({ color }) => css`
    color: ${color};
    `
  }
  }
  &::after {
    content: '';
    ${({ from, via, to }) => css`
      background: linear-gradient(to right, ${from}, ${via}, ${to});
    `}
    display: block;
    height: 2px;
    transition: width 0.3s ease-in-out;
    width: 0;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  &:hover::after {
    width: 100%;
  }
  @media (min-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 640px) {
    font-size: 1.6rem;
  }
  ${({ active, color }) =>
    active &&
    css`
      color: ${color};
      &::after{
        width: 100%;
      }
    `}
`;
