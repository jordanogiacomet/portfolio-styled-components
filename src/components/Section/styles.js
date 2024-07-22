import styled, { css } from 'styled-components';

const sectionStyles = {
  'hero-section': css`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    @media(max-width: 400px) {
       > div > h1 {
        font-size: ${({ theme }) => theme.font.sizes.xl} !important;
       }
    }

    @media ${({ theme }) => theme.media.sm} {
      grid-template-columns: repeat(12, 1fr);
      align-items: center;
      gap: 5rem;
    }
  `,
  'about-section': css`
  color: ${({ theme }) => theme.colors.white};
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  @media ${({theme}) => theme.media.md} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: start; /* Altere para start para evitar centralização vertical */
    margin-top: 80px;
  }
  @media ${({theme}) => theme.media.xl} {
    gap: 50px;
  };
`,
  'projects-section': css`
    margin-top: 30px;
    margin-bottom: 240px;
    text-align: left;
    display: flex;
    flex-direction: column;
    height: auto;
    @media ${({theme}) => theme.media.md}  {
      margin-top: 0;
    }
    @media ${({theme}) => theme.media.lg}  {
       margin-bottom: 100px;
    };
  `,
  'email-section': css`
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
  `,
};

export const Container = styled.section`
  ${({ type }) => sectionStyles[type] || ''};
`;
