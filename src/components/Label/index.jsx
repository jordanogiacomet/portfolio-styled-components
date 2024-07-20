import P from 'prop-types';
import * as Styled from './styles';
import { useColorMode } from '../../contexts/ColorModeContext';
import { useColorCustomization } from '../../contexts/ColorCustomizationContext';

export const Label = ({ children, htmlFor }) => {
  const { primaryColor } = useColorCustomization();
  const { colorMode } = useColorMode();
  return (
    <Styled.Container color={primaryColor} htmlFor={htmlFor} className={colorMode}>
      {children}
    </Styled.Container>
  );
};

Label.propTypes = {
  children: P.node.isRequired,
  htmlFor: P.string.isRequired,
};