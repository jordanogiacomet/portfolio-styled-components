import P from 'prop-types';
import * as Styled from './styles';
import { useColorCustomization } from '../../contexts/ColorCustomizationContext';

export const TabContent = ({ children }) => {
  const { primaryColor } = useColorCustomization();
  return (
    <Styled.Container color={primaryColor}>
      {children}
    </Styled.Container>
  );
};

TabContent.propTypes = {
  children: P.node.isRequired,
};