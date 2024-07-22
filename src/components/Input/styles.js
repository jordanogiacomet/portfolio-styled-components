import styled from 'styled-components';

export const Container = styled.input`
  background: ${({ theme }) => theme.colors.backgroundFooterDark};
  border: 1px solid ${({ theme }) => theme.colors.borderFooter};
  color: ${({ theme }) => theme.colors.inputGray};
  font-size: ${({ theme }) => theme.font.sizes.small};
  border-radius: 0.5rem;
  width: 100%;
  padding: 1.5rem; 
  display: block;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gradientColors.dark.from};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.inputGray};
    font-size: ${({ theme }) => theme.font.sizes.small};
  }
`;