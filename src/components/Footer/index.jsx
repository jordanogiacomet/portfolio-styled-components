import * as Styled from './styles';
import { LogoLink } from '../LogoLink';
import { useColorMode } from '../../contexts/ColorModeContext';
import { LanguageToggleButton } from '../LanguageToggleButton';
import { ColorModeToggleButton } from '../ColorModeToggleButton';


export const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Styled.Container className={colorMode}>
      <Styled.Wrapper>
          <LogoLink link='/' text='LOGO' />
          <div>
            <LanguageToggleButton />
            <ColorModeToggleButton />
          </div>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

Footer.propTypes = {
  
};