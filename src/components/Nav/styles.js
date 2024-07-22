import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: ${({ theme }) => theme.colors.backgroundNavDark};
  opacity: 1; 
  &.light{
    background-color: ${({ theme }) => theme.colors.backgroundFooterLight};
  }
`;

