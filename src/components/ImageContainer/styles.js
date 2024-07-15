import styled from 'styled-components';

export const Container = styled.div`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background: url(${(props) => props.imgUrl});
  background-size: cover;
  position: relative;
  height: 100%;
  &:hover .overlay {
    display: flex;
    background-opacity: 0.8;
  }
`;
