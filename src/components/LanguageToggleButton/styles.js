import styled from 'styled-components';

export const Container = styled.button`
  padding: 1rem;
  background-color: transparent;
  box-shadow: none;
  border: 2px solid ${({ theme }) => theme.colors.textColor};
  border-radius: 9999px;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  right: 2.5rem;
  margin-right: 2rem;
  @media ${({ theme }) => theme.mediaMax.md} {
    bottom: 20px;
  };
  &.light{
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.white};
    &:hover{
      color: ${({ theme }) => theme.colors.mediumGray};
      border-color: ${({ theme }) => theme.colors.mediumGray};
    };
  };
  cursor: pointer;
  transition: 0.2s;
  &:hover{
    color: ${({ theme }) => theme.colors.gradientColors.dark.via};
    border-color: ${({ theme }) => theme.colors.gradientColors.dark.via};
  };
`;
