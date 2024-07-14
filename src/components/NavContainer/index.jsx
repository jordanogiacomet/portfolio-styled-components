import P from 'prop-types';
import * as Styled from './styles';

export const NavContainer = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

NavContainer.propTypes = {
  children: P.node.isRequired,
};