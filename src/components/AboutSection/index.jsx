import P from 'prop-types';
import * as Styled from './styles';

export const AboutSection = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

AboutSection.propTypes = {
  children: P.node.isRequired,
};