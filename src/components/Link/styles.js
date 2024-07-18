import styled from 'styled-components';

export const Container = styled.a`
  height: 3.5rem;
  width: 3.5rem;
  border: 0.125rem solid #adb7be;
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
  }

  &:hover {
    border-color: white;

    .icon {
      color: white;
    }
  }

  .icon {
    height: 2.5rem;
    width: 2.5rem;
    color: #adb7be;
    transition: color 0.3s;
  }
`;