import P from 'prop-types';
import * as Styled from './styles';
import { useColorMode } from '../../contexts/ColorModeContext';

export const MenuButton = ({ children, onClick }) => {
  const { colorMode } = useColorMode();
  return (
    <Styled.Container onClick={onClick} className={colorMode}>
      {children}
    </Styled.Container>
  );
};

MenuButton.propTypes = {
  children: P.node.isRequired,
  onClick: P.func.isRequired
};