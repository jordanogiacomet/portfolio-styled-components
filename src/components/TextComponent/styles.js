import styled, { css } from 'styled-components';

const defaultStyles = css`
  margin-bottom: 20px;
  margin-top: 20px;
`;

const aboutStyles = css`
  margin-bottom: 30px;
  margin-top: 30px;
`;

const projectsStyles = css`
  margin-bottom: 10px;
  margin-top: 10px;
  font-weight: bold;
`;

const getTextStyles = (type) => {
  switch (type) {
    case 'about':
      return aboutStyles;
    case 'projects':
      return projectsStyles;
    default:
      return defaultStyles;
  }
};

export const Container = styled.p`
  ${({ theme, $colorDark, type }) => css`
    font-size: ${theme.font.sizes.base};
    color: ${$colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${getTextStyles(type)}
    
    @media ${theme.media.sm} {
      font-size: ${theme.font.sizes.lg};
    }

    @media ${theme.media.lg} {
      font-size: ${theme.font.sizes.xl};
    }
  `}
`;