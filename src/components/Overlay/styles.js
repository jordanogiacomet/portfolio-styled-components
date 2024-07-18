import styled, { css } from 'styled-components';


const menuOverlayStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;

  @media (min-width: 768px) {
    display: none;
  };
`;

const projectOverlayStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(24, 24, 24, 0.8);
  z-index: 1;

  &:hover a {
    transition: opacity 0.3s, visibility 0.3s;
    visibility: visible;
    opacity: 1;
  };
`;

const getOverlayStyles = (type) => {
  switch (type) {
    case 'menu-overlay':
      return menuOverlayStyles
    case 'project-overlay':
      return projectOverlayStyles
    default:
      break;
  }
};

export const Container = styled.div`
   ${({ type }) => css`
    ${getOverlayStyles(type)}
  `};
`;
