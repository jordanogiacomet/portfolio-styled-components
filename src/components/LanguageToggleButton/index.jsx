import { useColorMode } from '../../contexts/ColorModeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import * as Styled from './styles';
import P from 'prop-types';

export const LanguageToggleButton = () => {
  const { language, toggleLanguage } = useLanguage();
  const { colorMode } = useColorMode();

  const handleClick = () => {
    toggleLanguage();
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Styled.Container onClick={handleClick} aria-label="Switch language" className={colorMode}>
      {language === 'pt' ? 'EN-US' : 'PT-BR'}
    </Styled.Container>
  );
};

LanguageToggleButton.propTypes = {
  className: P.string,
};
