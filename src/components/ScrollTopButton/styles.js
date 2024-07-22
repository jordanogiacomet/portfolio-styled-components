import styled, { css } from 'styled-components';

export const Button = styled.button`
  position: fixed;
  bottom: 10rem;
  left: 4rem;
  width: 40px;
  height: 40px;
  ${({ via, to }) => css`
    background-color: ${via};
    &:hover {
      transition: ease-in-out 0.3s;
      background-color: ${to};
    };
  `}
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 50%;
  z-index: 99999999;
  padding: 10px;
  cursor: pointer;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.3s, visibility 0.3s, background-color 0.3s;
  @media ${({ theme }) => theme.mediaMax.md} {
    display: none;
  };
`;
