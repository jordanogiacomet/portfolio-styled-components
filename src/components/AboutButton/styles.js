// src/components/AboutButton/styles.js
import styled, { css } from 'styled-components';

export const Container = styled.button`
  background: transparent;
  position: relative;
  border: none;
  margin-right: 12px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  ${({ primaryColor }) => css`
    color: ${primaryColor};
  `}
  &.light {
    ${({ primaryColor }) => css`
      color: ${primaryColor};
    `}
    font-weight: 500;
    ${({ active, color }) =>
      active &&
      css`
        color: ${color};

        &::after {
          width: 100%;
        }
      `}
    }
  &:hover {
    ${({ color }) => css`
      color: ${color};
    `}
  }
  &::after {
    content: '';
    display: block;
    height: 2px;
    width: 0;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: width 0.3s ease-in-out;

    ${({ from, via, to }) => css`
      background: linear-gradient(to right, ${from}, ${via}, ${to});
    `}
  }
  &:hover::after {
    width: 100%;
  }

  @media ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.font.sizes.xl}
  };

  @media ${({ theme }) => theme.mediaMax.md} {
    font-size:  ${({ theme }) => theme.font.sizes.lg}
  }

  ${({ active, color }) =>
    active &&
    css`
      color: ${color};

      &::after {
        width: 100%;
      }
    `}
`;
