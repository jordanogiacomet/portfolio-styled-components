import P from 'prop-types';
import * as Styled from './styles';
import { useColorMode } from '../../contexts/ColorModeContext';

export const NavLink = ({ children, href, target = "_self", onClick }) => {
  const { colorMode } = useColorMode();
  return (
    <Styled.Container href={href} target={target} onClick={onClick} className={colorMode}>
      {children}
    </Styled.Container>
  );
};

NavLink.propTypes = {
  children: P.node.isRequired,
  href: P.string.isRequired,
  target: P.string,
  onClick: P.func.isRequired
};