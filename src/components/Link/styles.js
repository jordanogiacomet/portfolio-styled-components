import styled from 'styled-components';

export const Container = styled.a`
  height: 3.5rem;
  width: 3.5rem;
  margin-right: 0.5rem;
  border: 0.125rem solid #adb7be;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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
    transition: color 0.3s ease-in-out;
  }
`;