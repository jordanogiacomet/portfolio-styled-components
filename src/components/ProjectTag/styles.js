import styled from 'styled-components';

export const Container = styled.div`
  background: transparent;
  border: 2px solid ${props => (props.isSelected ? '#4169E1' : '#ADB7BE')};
  color: ${props => (props.isSelected ? '#4169E1' : '#ADB7BE')};
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: #4169E1;
    color: #4169E1;
  }
`;
