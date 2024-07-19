import P from 'prop-types';
import * as Styled from './styles';
import { useColorMode } from '../../contexts/ColorModeContext';

export const Heading = ({ 
  children,
  as = 'h1',
  size = 'huge',
  uppercase = false, 
  zIndex = '2',
}) => {
  const { colorMode } = useColorMode();
  return (
    <Styled.Title as={as} colorDark={colorMode === 'light' ? false : true} $size={size} $uppercase={uppercase} $zIndex={zIndex}>
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  zIndex: P.string,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: P.bool,
};
