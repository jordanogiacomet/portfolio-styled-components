import P from 'prop-types';
import * as Styled from './styles';

export const Menu = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

Menu.propTypes = {
  children: P.node.isRequired,
};