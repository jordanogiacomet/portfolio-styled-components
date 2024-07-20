import styled, { css } from 'styled-components';

const customGradient = ({ from, via, to }) => css`
  background: linear-gradient(to right, ${from}, ${via}, ${to});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Container = styled.span`
  ${({ from, via, to }) => customGradient({ from, via, to })}
`;
