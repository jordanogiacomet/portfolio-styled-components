import P from 'prop-types';
import * as Styled from './styles';

export const Overlay = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

Overlay.propTypes = {
  children: P.node.isRequired,
};