/* eslint-disable no-undef */
import * as Styled from './styles';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Avatar from './hero_avatar.webp';
import ScrollToTopButton from '../ScrollTopButton';
import { useEffect } from 'react';

export const ContactSection = () => {
  const phoneNumber = process.env.REACT_APP_WHATSAPP_PHONE_NUMBER;
  const accountName = process.env.REACT_APP_ACCOUNT_NAME;
  const chatMessage = process.env.REACT_APP_CHAT_MESSAGE;

  useEffect(() => {
    // Substitua pelo seletor correto do botão
    const whatsappButton = document.querySelector('.floating-whatsapp-button');
    if (whatsappButton) {
      whatsappButton.setAttribute('aria-hidden', 'false');
    }
    const whatsappChat = document.querySelector('.floating-whatsapp-chatbox');
    if (whatsappChat) {
      whatsappChat.setAttribute('aria-hidden', 'false');
    }
    const sendButton = document.querySelector('.styles-module_buttonSend__kXjja');
    if (whatsappChat) {
      sendButton.setAttribute('aria-label', 'Enviar mensagem');
    }

  }, []);
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