/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import * as Styled from './styles';
import { TextComponent } from '../TextComponent';
import { Link } from '../Link';
import GithubIcon from "./icons/github-icon.svg";
import LinkedinIcon from "./icons/linkedin-icon.svg";
import { Socials } from '../Socials';
import { GradientText } from '../GradientText';
import { Heading } from '../Heading';
import { Form } from '../Form';
import { Label } from '../Label';
import { Input } from '../Input';
import { TextArea } from '../TextArea';
import { EmailButton } from '../EmailButton';
import { Section } from '../Section';
import { Container } from '../Container';
import { useLanguage } from '../../contexts/LanguageContext';
import { Spinner } from '../Spinner'; // Import do Spinner

export const EmaiLSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { language } = useLanguage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    setLoading(true);

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch('https://email-api-six.vercel.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar email');
      }

      setEmailSubmitted(true);
      setLoading(false);
    } catch (error) {
      setFormError(error.message);
      setLoading(false);
    }
  };

  return (
    <div id='contact'>
      <Section type='email-section'>
        <Styled.Col span={4} className='form-element'>
          {emailSubmitted ? (
            <TextComponent type='default'>
              {language === 'en' ? 'Email enviado com sucesso!' : 'Email successfully sent!'} ✔️
            </TextComponent>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Container type='form-container'>
                <Label htmlFor='email'>{language === 'en' ? 'Seu email' : 'Your email'}</Label>
                <Input name='email' type='email' id='email' required placeholder='user@example.com'/>
              </Container>
              <Container type='form-container'>
                <Label htmlFor='subject'>{language === 'en' ? 'Assunto' : 'Subject'}</Label>
                <Input name='subject' type='text' id='subject' required placeholder='Just saying hi'/>
              </Container>
              <Container type='form-container'>
                <Label htmlFor='message'>{language === 'en' ? 'Sua mensagem' : 'Your message'}</Label>
                <TextArea name='message' id='message' placeholder='Lets talk about...'/>
              </Container>
              <Container type='form-container'>
                <EmailButton type="submit" disabled={loading}>
                  {loading ? <Spinner /> : (language === 'en' ? 'Enviar mensagem' : 'Send message')}
                </EmailButton>
              </Container>
              {formError && <TextComponent type='default'>{formError}</TextComponent>}
            </Form>
          )}
        </Styled.Col>
        <Styled.Col span={8} className='text-element'>
          <Heading as='h5' size='medium'>
            <GradientText from='#1E90FF' via='#4169E1' to='#00008B'>
              {language === 'en' ? 'Vamos nos conectar' : "Let's connect"}
            </GradientText>
          </Heading>
          <TextComponent type='default'>
            {" "}
            {language === 'en' ? 'Atualmente, estou procurando novas oportunidades. Sinta-se à vontade para entrar em contato comigo e responderei o mais rápido possível.' : 'I am currently looking for new opportunities. Please feel free to contact me and I will respond as quickly as possible.'}
          </TextComponent>
          <Socials>
            <Link href='https://github.com/jordanogiacomet' className='mail-icons'><img loading="lazy" src={GithubIcon} alt='Github icon'/></Link>
            <Link href='https://www.linkedin.com/in/jordano-giacomet-tomazoni-aba346184/' className='mail-icons'><img loading="lazy" src={LinkedinIcon} alt='Linkedin icon'/></Link>
          </Socials>
        </Styled.Col>
      </Section>
    </div>
  );
};

EmaiLSection.propTypes = {};
