/* eslint-disable no-undef */
import * as Styled from './styles';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Avatar from './hero_avatar.png';
import ScrollToTopButton from '../ScrollTopButton';

export const ContactSection = () => {
  const phoneNumber = process.env.REACT_APP_WHATSAPP_PHONE_NUMBER;
  const accountName = process.env.REACT_APP_ACCOUNT_NAME;
  const chatMessage = process.env.REACT_APP_CHAT_MESSAGE;

  return (
    <Styled.Container>
      <ScrollToTopButton />
      <FloatingWhatsApp 
        accountName={accountName} 
        phoneNumber={phoneNumber} 
        chatMessage={chatMessage} 
        allowClickAway={true}
        darkMode={true}
        avatar={Avatar}
      />
    </Styled.Container>
  );
};

ContactSection.propTypes = {};