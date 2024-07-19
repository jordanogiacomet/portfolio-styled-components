import P from 'prop-types';
import * as Styled from './styles';
import { useColorMode } from '../../contexts/ColorModeContext';

export const TextComponent = ({ children, type = 'default' }) => {
  const { colorMode } = useColorMode();
  return (
    <Styled.Container colorDark={colorMode === 'light' ? true : false} type={type}>
      {children}
    </Styled.Container>
  );
};

TextComponent.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
  type: P.oneOf(['default', 'about', 'projects']),
};