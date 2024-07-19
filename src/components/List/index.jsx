import P from 'prop-types';
import * as Styled from './styles';
import { useColorMode } from '../../contexts/ColorModeContext';

export const List = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <Styled.Container className={colorMode}>
      {children}
    </Styled.Container>
  );
};

List.propTypes = {
  children: P.node.isRequired,
};