import styled from 'styled-components';

export const Container = styled.div`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background: url(${(props) => props.imgUrl}) no-repeat center center/cover;
  position: relative;
  height: 100%;
`;
