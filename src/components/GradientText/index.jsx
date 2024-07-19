import P from 'prop-types';
import * as Styled from './styles';
import { useColorMode } from '../../contexts/ColorModeContext';

export const GradientText = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <Styled.Container 
      from={colorMode === 'light' ? '#4169E1' : '#1E90FF'} 
      via={colorMode === 'light' ? '#2B6DE1' : '#4169E1'} 
      to={colorMode === 'light' ? '#00008B' : '#00008B'}>
      {children}
    </Styled.Container>
  );
};

GradientText.propTypes = {
  children: P.node.isRequired,
};