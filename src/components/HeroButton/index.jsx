import P from 'prop-types';
import * as Styled from './styles';

export const HeroButton = ({ children, type="default", ...props }) => {

  return (
    <Styled.Container type={type} {...props} onClick={props.onClick}>
      {children}
    </Styled.Container>
  );
};

HeroButton.propTypes = {
  children: P.node.isRequired,
  type: P.string,
  onClick: P.func.isRequired,
};