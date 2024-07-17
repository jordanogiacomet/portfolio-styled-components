/* eslint-disable react/no-unescaped-entities */
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



export const EmaiLSection = () => {
  return (
    <Section type='email-section'>
        <Styled.Col span={4} className='form-element'>
          <Form>
            <Styled.FormDiv>
                <Label htmlFor='email'>Your email</Label>
                <Input name='email' type='email' id='email' required placeholder='user@example.com'/>
            </Styled.FormDiv>
            <Styled.FormDiv>
                <Label htmlFor='subject'>Your subject</Label>
                <Input name='subject' type='text' id='subject' required placeholder='Just saying hi'/>
            </Styled.FormDiv>
            <Styled.FormDiv>
                <Label htmlFor='message'>Your message</Label>
                <TextArea name='message' id='message' placeholder='Lets talk about...'/>
            </Styled.FormDiv>
            <Styled.FormDiv>
            <EmailButton type="submit">Send Message</EmailButton>
          </Styled.FormDiv>
          </Form>
        </Styled.Col>
        <Styled.Col span={8} className='text-element'>
          <Heading as='h5' size='medium'>
              <GradientText from='#1E90FF' via='#4169E1' to='#00008B'>
                Let's connect
              </GradientText>
            </Heading>
          <TextComponent>
          {" "}
            I'm currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </TextComponent>
          <Socials>
            <Link href='/' className='mail-icons'><img src={GithubIcon}/></Link>
            <Link href='/' className='mail-icons'><img src={LinkedinIcon}/></Link>
          </Socials>
        </Styled.Col>
      </Section>
  );
};

EmaiLSection.propTypes = {
  
};