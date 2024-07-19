import * as Styled from './styles';
import { LogoLink } from '../LogoLink';
import { useLanguage } from '../../contexts/LanguageContext';


export const Footer = () => {
  const { language } = useLanguage();
  return (
    <Styled.Container>
      <Styled.Wrapper>
          <LogoLink link='/' text='LOGO' />
        <Styled.Text>{language == 'en' ? 'Todos os direitos reservados.' : 'All rights reserved.'}</Styled.Text>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

Footer.propTypes = {
  
};