import styled, { css } from 'styled-components';


const heroSectionStyles = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media ${({ theme }) => theme.media.sm} {
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    gap: 5rem;
  }
`;

const aboutSectionStyles = css`
  color: white;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
    margin-top: 80px;
  }
  @media (min-width: 1280px) {
    gap: 50px;
  };
`;

const projectSectionStyles = css`
  margin-top: 30px;
  margin-bottom: 240px;
  text-align: left;
  display: flex;
  flex-direction: column;
  height: auto;
  @media (min-width: 768px) {
    margin-top: 0;
  }
  @media(max-width: 1024px) {
     margin-bottom: 100px;
    };
`;

const emailSectionStyles = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-bottom: 100px;
  @media(max-width: 640px) {
    margin-bottom: 30px;
  }

  @media ${({ theme }) => theme.media.lg} {
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
  }
`;

const getSectionStyles = (type) => {
  switch (type) {
    case 'hero-section':
      return heroSectionStyles
    case 'about-section':
      return aboutSectionStyles
    case 'projects-section':
      return projectSectionStyles
    case 'email-section':
      return emailSectionStyles  
    default:
      break;
  }
}

export const Container = styled.section`
  ${({ type }) => css`
    ${getSectionStyles(type)}
  `}
`;
