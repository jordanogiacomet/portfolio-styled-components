import P from 'prop-types';
import * as Styled from './styles';

export const TextContainer = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

TextContainer.propTypes = {
  children: P.node.isRequired,
};