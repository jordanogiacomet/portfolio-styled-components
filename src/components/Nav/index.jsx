import P from 'prop-types';
import * as Styled from './styles';

export const Nav = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

Nav.propTypes = {
  children: P.node.isRequired,
};