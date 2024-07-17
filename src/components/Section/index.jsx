import P from 'prop-types';
import * as Styled from './styles';

export const Section = ({ children, type }) => {
  return (
    <Styled.Container type={type}>
      {children}
    </Styled.Container>
  );
};

Section.propTypes = {
  children: P.node.isRequired,
  type: P.string.isRequired,
};