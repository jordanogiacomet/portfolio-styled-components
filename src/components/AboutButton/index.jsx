import P from 'prop-types';
import * as Styled from './styles';

export const AboutButton = ({ children, active, selectTab }) => {
  return (
    <Styled.Container onClick={selectTab} active={active}>
      {children}
    </Styled.Container>
  );
};

AboutButton.propTypes = {
  children: P.node.isRequired,
  active: P.bool.isRequired,
  selectTab: P.func.isRequired,
};