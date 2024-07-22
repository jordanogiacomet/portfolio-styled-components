import styled from 'styled-components';

export const Container = styled.button`
  padding: 1rem;
  background-color: transparent;
  box-shadow: none;
  border: 2px solid ${({ theme }) => theme.colors.textColor} ;
  border-radius: 9999px;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: ${({ theme }) => theme.font.sizes.xsmall} ;
  right: 10rem;
  cursor: pointer;
  z-index: 199999;
  transition: 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.gradientColors.light.from};
    border-color: ${({ theme }) => theme.colors.gradientColors.light.from};
  };
   
  @media ${({ theme }) => theme.mediaMax.md} {
    bottom: 20px;
  };

  &.light {
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.white};

    &:hover {
      color: ${({ theme }) => theme.colors.mediumGray};
      border-color: ${({ theme }) => theme.colors.mediumGray};
    };
  };
`;

