import styled from 'styled-components';

export const ParallaxContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none; 
`;

export const ParallaxElement = styled.div`
  background: url('/images/cornered-stairs.svg') no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  will-change: transform; 
`;