import P from 'prop-types';
import * as Styled from './styles';
import { useColorCustomization } from '../../contexts/ColorCustomizationContext';
export const TextComponent = ({ children, type = 'default' }) => {
  const { primaryColor } = useColorCustomization();
  return (
    <Styled.Container type={type} color={primaryColor}>
      {children}
    </Styled.Container>
  );
};

TextComponent.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
  type: P.oneOf(['default', 'about', 'projects']),
};