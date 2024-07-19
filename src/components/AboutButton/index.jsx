import P from 'prop-types';
import * as Styled from './styles';
import { useColorMode } from '../../contexts/ColorModeContext';

export const AboutButton = ({ children, active, selectTab }) => {
  const { colorMode } = useColorMode();
  return (
    <Styled.Container onClick={selectTab} active={active} className={colorMode}>
      {children}
    </Styled.Container>
  );
};

AboutButton.propTypes = {
  children: P.node.isRequired,
  active: P.bool.isRequired,
  selectTab: P.func.isRequired,
};