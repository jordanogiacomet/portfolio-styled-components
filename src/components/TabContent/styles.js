import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ color }) => css`
  margin-top: 8px;
  color: ${color};
  `}
`;
