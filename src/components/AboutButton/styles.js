import styled, { css } from 'styled-components';

export const Container = styled.button`
  background: transparent;
  position: relative;
  border: none;
  color: #ADB7BE;
  margin-right: 12px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  &.light{
    color: black;
    ${({ active }) =>
    active &&
    css`
      color: #1E90FF;
      &::after{
        width: 100%;
      }
    `}
  }
  &:hover {
    color: #1E90FF;
  }
  &::after {
    content: '';
    display: block;
    height: 2px;
    background: linear-gradient(to right, #1E90FF, #4169E1, #00008B);
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
  ${({ active }) =>
    active &&
    css`
      color: #1E90FF;
      &::after{
        width: 100%;
      }
    `}
`;
