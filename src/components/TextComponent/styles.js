import styled, { css } from 'styled-components';

export const Container = styled.p`
  ${({ theme, $colorDark }) => css`
    font-size: ${theme.font.sizes.base};
    color: ${$colorDark ? theme.colors.primaryColor : theme.colors.white};
    margin-bottom: 20px;
    margin-top: 20px;
    @media ${theme.media.sm} {
      font-size: ${theme.font.sizes.lg};
    };

    @media ${theme.media.lg} {
      font-size: ${theme.font.sizes.xl};
    }
  `}
`;
