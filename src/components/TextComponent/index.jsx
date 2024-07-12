import P from 'prop-types';
import * as Styled from './styles';

export const TextComponent = ({ children, colorDark=false }) => {
  return (
    <Styled.Container colorDark={colorDark}>
      {children}
    </Styled.Container>
  );
};

TextComponent.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
};