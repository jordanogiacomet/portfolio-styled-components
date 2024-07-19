import P from 'prop-types';
import * as Styled from './styles';
import { useColorMode } from '../../contexts/ColorModeContext';

export const Label = ({ children, htmlFor }) => {
  const { colorMode } = useColorMode();
  return (
    <Styled.Container htmlFor={htmlFor} className={colorMode}>
      {children}
    </Styled.Container>
  );
};

Label.propTypes = {
  children: P.node.isRequired,
  htmlFor: P.string.isRequired,
};