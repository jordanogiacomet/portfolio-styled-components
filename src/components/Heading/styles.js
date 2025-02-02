import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.big};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.xbig};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFont(theme)};
  `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xbig};
  }
`;

const titleCase = ($uppercase) => css`
  text-transform: ${$uppercase ? 'uppercase' : 'none'};
`;

const zIndex = ($zIndex) => css`
  z-index: ${$zIndex ? '2' : 'none'};
`

export const Title = styled.h1`
  ${({ theme, colorDark, $size, $uppercase, $zIndex }) => css`
    color: ${colorDark ? theme.colors.textColor : theme.colors.white};
    ${titleSize[$size](theme)};
    ${titleCase($uppercase)};
    ${zIndex($zIndex)};
  `}
`;
