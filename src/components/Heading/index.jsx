import P from 'prop-types';
import * as Styled from './styles';

export const Heading = ({ 
  children,
  colorDark = true,
  as = 'h1',
  size = 'huge',
  uppercase = false, 
  zIndex = '2',
}) => {
  return (
    <Styled.Title as={as} $colorDark={colorDark} $size={size} $uppercase={uppercase} $zIndex={zIndex}>
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
  zIndex: P.string,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: P.bool,
};
