import P from 'prop-types';
import * as Styled from './styles';

export const TextComponent = ({ children, colorDark = false, type = 'default' }) => {
  return (
    <Styled.Container $colorDark={colorDark} type={type}>
      {children}
    </Styled.Container>
  );
};

TextComponent.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
  type: P.oneOf(['default', 'about', 'projects']),
};