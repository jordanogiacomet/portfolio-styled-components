import styled, { css } from 'styled-components';

const textStyles = {
  default: css`
    margin-bottom: 20px;
    margin-top: 20px;
  `,
  about: css`
    margin-bottom: 30px;
    margin-top: 30px;
  `,
  projects: css`
    margin-bottom: 10px;
    margin-top: 10px;
    font-weight: bold;
  `,
};

export const Container = styled.p`
  ${({ theme, color, type }) => css`
    font-size: ${theme.font.sizes.base};
    color: ${color};
    ${textStyles[type] || textStyles.default}
    
    @media ${theme.media.sm} {
      font-size: ${theme.font.sizes.lg};
    }

    @media ${theme.media.lg} {
      font-size: ${theme.font.sizes.xl};
    }
  `}
`;
