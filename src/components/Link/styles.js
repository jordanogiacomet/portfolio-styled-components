import styled from 'styled-components';

export const Container = styled.a`
  height: 3.5rem;
  width: 3.5rem;
  border: 0.125rem solid ${({ theme }) => theme.colors.textColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: border-color 0.3s;
  visibility: hidden;
  opacity: 0;

  &.mail-icons {
    opacity: 1 !important;
    visibility: visible !important;
    &.light{
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.white};
    };
    &.dark{
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.white};
    };
  };

  &:hover {
    border-color: ${({ theme }) => theme.colors.white};

    .icon {
      color: ${({ theme }) => theme.colors.white};
    };
  };

  .icon {
    height: 2.5rem;
    width: 2.5rem;
    color: ${({ theme }) => theme.colors.textColor};
    transition: color 0.3s;
  };
`;
