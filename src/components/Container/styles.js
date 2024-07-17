import styled, { css } from 'styled-components';



const cardContainerStyles = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
`;

const homeContainerStyles = css`
  width: 100%;
  margin-top: 8rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem 3rem;

  @media ${({ theme }) => theme.media.sm} { 
    max-width: ${({ theme }) => theme.container.maxWidth.sm};
  };

  @media ${({ theme }) => theme.media.md} { 
    max-width: ${({ theme }) => theme.container.maxWidth.md};
  };

  @media ${({ theme }) => theme.media.lg} { 
    max-width: ${({ theme }) => theme.container.maxWidth.lg};
  };

  @media ${({ theme }) => theme.media.xl} { 
    max-width: ${({ theme }) => theme.container.maxWidth.xl};
  };

  @media ${({ theme }) => theme.media.xxl} { 
    max-width: ${({ theme }) => theme.container.maxWidth.xxl};
  };
`;

const navContainerStyles = css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    margin: 1rem;
`;

const tabContainerButtonStyles = css`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
`;

const tagContainerStyles = css`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 5rem;
`;

const textContainerAboutStyles = css`
  margin-top: 30px;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    margin-top: 0;
  }
  text-align: left;
  display: flex;
  flex-direction: column;
  order: 1;
  height: auto;
`;

const textContainerProjectStyles = css`
  margin-top: 30px;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    margin-top: 0;
  }
  text-align: left;
  display: flex;
  flex-direction: column;
  order: 1;
  height: auto;
`;

const getContainerStyles = (type) => {
  switch (type) {
    case 'card-container':
      return cardContainerStyles
    case 'home-container':
      return homeContainerStyles
    case 'nav-container':
      return navContainerStyles  
    case 'tab-container':
      return tabContainerButtonStyles  
    case 'tag-container':
      return tagContainerStyles
    case 'text-container-about':
      return textContainerAboutStyles
    case 'text-container-projects':
      return textContainerProjectStyles
    default:
      break;
  }
};


export const Container = styled.div`
   ${({ type }) => css`
    ${getContainerStyles(type)}
  `};
`;
