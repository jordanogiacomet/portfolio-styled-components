import P from 'prop-types';
import * as Styled from './styles';

export const AboutImageWrapper = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

AboutImageWrapper.propTypes = {
  children: P.node.isRequired,
};