import P from 'prop-types';
import * as Styled from './styles';

export const TextContainer = ({ children, type }) => {
  return (
    <Styled.Container type={type}>
      {children}
    </Styled.Container>
  );
};

TextContainer.propTypes = {
  children: P.node.isRequired,
  type: P.oneOf(['about', 'projects']).isRequired,
};