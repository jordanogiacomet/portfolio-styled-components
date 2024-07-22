import styled from 'styled-components';

export const Container = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.borderFooter};
  border-left: transparent;
  border-right: transparent;
  z-index: 10;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundFooterDark};

  &.light {
    background-color: ${({ theme }) => theme.colors.backgroundFooterLight};
  };
`;

export const Wrapper = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.mediaMax.sm} {
    flex-direction: column;
    gap: 20px;
  };
`;

export const Text = styled.p`
  text-align: center;
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.textColor};

  &.light {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Logo = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.base};
  font-weight: bold;
`;
