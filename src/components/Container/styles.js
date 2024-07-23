import styled, { css } from 'styled-components';

const containerStyles = {
  'card-container': css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5rem;
  `,
  'home-container': css`
    width: 100%;
    margin-top: 10rem;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem 3rem;
    z-index: 1;

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
  `,
  'nav-container': css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    margin: 1rem;
  `,
  'tab-container': css`
    display: flex;
    flex-direction: row;
    margin-top: 8px;
    margin-bottom: 25px;
`,
'radar-chart-container': css`
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;
@media ${({ theme }) => theme.media.md} {
  order: 1;
  margin-top: 0;
}
`,
  'tag-container': css`
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 5rem;
  `,
  'text-container-about': css`
  margin-top: 30px;
  margin-bottom: 30px;
  @media ${({ theme }) => theme.media.md} {
    margin-top: 0;
    order: 2;
  }
  text-align: left;
  display: flex;
  flex-direction: column;
  height: auto;
`,
  'text-container-projects': css`
    margin-top: 30px;
    margin-bottom: 30px;
    @media ${({ theme }) => theme.media.md} {
      margin-top: 0;
    }
    text-align: left;
    display: flex;
    flex-direction: column;
    order: 1;
    height: auto;
  `,
  'form-container': css`
    margin-bottom: 2rem;
  `,
};

export const Container = styled.div`
  ${({ type }) => containerStyles[type] || ''};
`;