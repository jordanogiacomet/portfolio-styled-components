import * as Styled from './styles';
import { LogoLink } from '../LogoLink';


export const Footer = () => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
          <LogoLink link='/' text='LOGO' />
        <Styled.Text>All rights reserved.</Styled.Text>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

Footer.propTypes = {
  
};