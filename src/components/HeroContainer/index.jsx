import P from 'prop-types';
import * as Styled from './styles';

export const HeroContainer = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

HeroContainer.propTypes = {
  children: P.node.isRequired,
}