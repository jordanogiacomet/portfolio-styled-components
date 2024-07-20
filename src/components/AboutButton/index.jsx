import P from 'prop-types';
import * as Styled from './styles';
import { useColorMode } from '../../contexts/ColorModeContext';
import { useColorCustomization } from '../../contexts/ColorCustomizationContext';

export const AboutButton = ({ children, active, selectTab }) => {
  const { colorMode } = useColorMode();
  const { gradientColors, primaryColor } = useColorCustomization();
  return (
    <Styled.Container 
    primaryColor={primaryColor}
    from={gradientColors.from}
    via={gradientColors.via}
    to={gradientColors.to}
    color={gradientColors.from}
    onClick={selectTab} 
    active={active} 
    className={colorMode}>
    {children}
    </Styled.Container>
  );
};

AboutButton.propTypes = {
  children: P.node.isRequired,
  active: P.bool.isRequired,
  selectTab: P.func.isRequired,
};