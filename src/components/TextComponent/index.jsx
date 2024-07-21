import P from 'prop-types';
import * as Styled from './styles';
import { useColorCustomization } from '../../contexts/ColorCustomizationContext';
import { useColorMode } from '../../contexts/ColorModeContext';

export const TextComponent = ({ children, type = 'default' }) => {
  const { primaryColor } = useColorCustomization();
  const { colorMode } = useColorMode();
  return (
    <Styled.Container type={type} color={primaryColor} className={colorMode}>
      {children}
    </Styled.Container>
  );
};

TextComponent.propTypes = {
  children: P.node.isRequired,
  type: P.oneOf(['default', 'about', 'projects']),
};
