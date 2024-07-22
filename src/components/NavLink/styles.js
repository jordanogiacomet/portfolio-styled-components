import styled from 'styled-components';

export const Container = styled.a`
  display: block;
  padding-top: 0.5rem;  
  padding-bottom: 0.5rem; 
  padding-left: 0.75rem;  
  padding-right: 1rem;  
  color: ${({ theme }) => theme.colors.textColor};  
  border-radius: 0.375rem;  
  text-decoration: none;
  transition: ease-in-out 0.3s;
  
  &.light{
    color: ${({ theme }) => theme.colors.white}; 
    &:hover{
      color: ${({ theme }) => theme.colors.mediumGray};
    };
  };
  
  &:hover{
    color: ${({ theme }) => theme.colors.gradientColors.dark.via}; 
  };
  @media (${({theme}) => theme.media.md}) { 
    margin-left: 15px;
  };

  @media (${({theme}) => theme.media.sm}) {  
    font-size:  ${({theme}) => theme.font.sizes.lg}; 
  };

  @media (${({theme}) => theme.media.md}) { 
    padding: 0;
  };
`;
