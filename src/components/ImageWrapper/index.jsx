import P from 'prop-types';
import * as Styled from './styles';

export const ImageWrapper = ({ children, type }) => {
  return (
    <Styled.Container type={type}>
      {children}
    </Styled.Container>
  );
};

ImageWrapper.propTypes = {
  children: P.node.isRequired,
  type: P.node.isRequired,
 
};