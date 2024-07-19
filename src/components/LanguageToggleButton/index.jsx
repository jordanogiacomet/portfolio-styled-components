import { useLanguage } from '../../contexts/LanguageContext';
import * as Styled from './styles';

export const LanguageToggleButton = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <Styled.Container onClick={toggleLanguage} aria-label="Switch language" >
      {language === 'pt' ? 'EN' : 'PT-BR'}
    </Styled.Container>
  );
};

LanguageToggleButton.propTypes = {

};