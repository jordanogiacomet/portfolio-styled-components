import styled, {css} from 'styled-components';




export const Wrapper = styled.main`
  ${({ color }) => css`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: ${color};
    `  
  } 
`
