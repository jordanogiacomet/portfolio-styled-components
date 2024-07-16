import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  opacity: 1;
  visibility: visible;

  &.hide {
    opacity: 0;
    visibility: hidden;
  }

  &.show {
    opacity: 1;
    visibility: visible;
  }
`;
