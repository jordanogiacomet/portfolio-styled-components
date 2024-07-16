import P from 'prop-types';
import * as Styled from './styles';

export const Socials = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

Socials.propTypes = {
  children: P.node.isRequired,
};