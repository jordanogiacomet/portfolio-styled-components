import P from 'prop-types';
import * as Styled from './styles';

export const Container = ({ children, type }) => {
  return (
    <Styled.Container type={type}>
      {children}
    </Styled.Container>
  );
};

Container.propTypes = {
  children: P.node.isRequired,
  type: P.string.isRequired,
};