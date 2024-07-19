import P from 'prop-types';
import * as Styled from './styles';
import { useColorMode } from '../../contexts/ColorModeContext';

export const HeroButton = ({ children, type="default", ...props }) => {
  const { colorMode } = useColorMode();
  return (
    <Styled.Container type={type} {...props} onClick={props.onClick} className={colorMode}>
      {children}
    </Styled.Container>
  );
};

HeroButton.propTypes = {
  children: P.node.isRequired,
  type: P.string,
  onClick: P.func.isRequired,
};