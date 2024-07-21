import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ color }) => css`
    border: 2px solid ${props => (props.isSelected ? `${color}` : '#ADB7BE')};
    color: ${props => (props.isSelected ? `${color}` : '#ADB7BE')};
    
    &.light{
    border: 2px solid ${props => (props.isSelected ? `${color}` : '#000000')};
    color: ${props => (props.isSelected ? `${color}` : '#000000')};
    font-weight: 500;
  }
  `}
  background: transparent;
  
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  
  
  

  &:hover {
    ${({ color }) => css`
      border-color: ${color};
      color: ${color};
    `}

  }
`;
