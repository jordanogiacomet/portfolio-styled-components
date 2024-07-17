import styled, { css } from 'styled-components';



const cardContainerStyles = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
`;



const getContainerStyles = (type) => {
  switch (type) {
    case 'card-container':
      return cardContainerStyles

  
    default:
      break;
  }
};


export const Container = styled.div`
   ${({ type }) => css`
    ${getContainerStyles(type)}
  `}
`;
