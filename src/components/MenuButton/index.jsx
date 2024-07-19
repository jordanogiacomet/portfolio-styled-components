import P from 'prop-types';
import * as Styled from './styles';

export const MenuButton = ({ children, onClick, ...props }) => {
  return (
    <Styled.Container onClick={onClick} {...props}>
      {children}
    </Styled.Container>
  );
};

MenuButton.propTypes = {
  children: P.node.isRequired,
  onClick: P.func.isRequired
};