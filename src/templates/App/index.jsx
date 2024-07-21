import { Suspense, lazy } from 'react';
import { AboutSection } from '../../components/AboutSection';
import { Container } from '../../components/Container';
import { Navbar } from '../../components/Navbar';
import * as Styled from './styles';
import { useColorCustomization } from '../../contexts/ColorCustomizationContext';
import { HeroSection } from '../../components/HeroSection'

// Lazy loading components
const ContactSection = lazy(() => import('../../components/ContactSection'));
const EmailSection = lazy(() => import('../../components/EmailSection'));
const Footer = lazy(() => import('../../components/Footer'));
const ProjectSection = lazy(() => import('../../components/ProjectSection'));
const ColorCustomizationSection = lazy(() => import('../../components/ColorCustomizationSection'));

function Home() {
  const { secondaryColor } = useColorCustomization();

  return (
    <div className="App">
      <Styled.Wrapper color={secondaryColor}>
        <Navbar />
        <Container type='home-container'>
          <HeroSection />
          <AboutSection />
          <Suspense fallback={<div>Loading Projects...</div>}>
            <ProjectSection />
          </Suspense>
          <Suspense fallback={<div>Loading Email Section...</div>}>
            <EmailSection />
          </Suspense>
          <Suspense fallback={<div>Loading Color Customization...</div>}>
            <ColorCustomizationSection />
          </Suspense>
          <Suspense fallback={<div>Loading Contact Section...</div>}>
            <ContactSection />
          </Suspense>
        </Container>
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
