import P from 'prop-types';
import * as Styled from './styles';

export const GradientText = ({ children, from="#a855f7", via="#ec4899", to="#f87171" }) => {
  return (
    <Styled.Container from={from} via={via} to={to}>
      {children}
    </Styled.Container>
  );
};

GradientText.propTypes = {
  children: P.node.isRequired,
  from: P.string,
  via: P.string,
  to: P.string,
};

