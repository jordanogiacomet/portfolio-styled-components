import styled from 'styled-components';

export const Container = styled.div`
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

  &.show {
    opacity: 1;
    visibility: visible;
  }

  &:hover a {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  }
`;
