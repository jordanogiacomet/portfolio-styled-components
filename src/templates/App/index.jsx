import { AboutSection } from '../../components/AboutSection';
import { ContactSection } from '../../components/ContactSection';
import { Container } from '../../components/Container';
import { EmailSection } from '../../components/EmailSection';
import { Footer } from '../../components/Footer';
import { HeroSection } from '../../components/HeroSection';
import { Navbar } from '../../components/Navbar';
import { ProjectSection } from '../../components/ProjectSection';
import * as Styled from './styles';
import { ColorCustomizationSection } from '../../components/ColorCustomizationSection';
import { useColorCustomization } from '../../contexts/ColorCustomizationContext';

function Home() {
  const { secondaryColor } = useColorCustomization();
  return (
    <div className="App">
      <Styled.Wrapper color={secondaryColor}>
        <Navbar />
        <Container type='home-container'>
          <HeroSection />
          <AboutSection />
          <ProjectSection />
          <EmailSection />
          <ColorCustomizationSection />
          <ContactSection />
        </Container>
        <Footer />
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
