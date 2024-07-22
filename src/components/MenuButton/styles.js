import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.menuButtonGray};
  border-radius: 0.375rem;
  background: none;
  color: ${({ theme }) => theme.colors.menuButtonGray};
  cursor: pointer;
  &.light{
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.white};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.white};
  }

  > svg {
    width: 2rem;
    height: 2rem;
  }
`;

