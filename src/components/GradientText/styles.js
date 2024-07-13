import styled, { css } from 'styled-components';

const defaultGradient = css`
  background: linear-gradient(to right, #a855f7, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const customGradient = ({ from, via, to }) => css`
  background: linear-gradient(to right, ${from}, ${via}, ${to});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Container = styled.span`
  ${({ from, via, to }) => (from && via && to ? customGradient({ from, via, to }) : defaultGradient)}
`;