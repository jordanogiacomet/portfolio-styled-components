import styled from 'styled-components';

export const Container = styled.textarea`
  background-color: ${({ theme }) => theme.colors.backgroundFooterDark};
  border: 1px solid ${({ theme }) => theme.colors.borderFooter};
  color: ${({ theme }) => theme.colors.inputGray};
  font-size: ${({ theme }) => theme.font.sizes.base};
  border-radius: 0.5rem;
  display: block;
  width: 100%;
  padding: 1.5rem;
  resize: vertical; 
  height: 200px;


  &::placeholder {
    color: ${({ theme }) => theme.colors.inputGray};
    font-size: ${({ theme }) => theme.font.sizes.base};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gradientColors.dark.from};
  }
`;
