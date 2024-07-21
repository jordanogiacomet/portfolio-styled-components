import { Suspense, lazy } from 'react';
import { Container } from '../../components/Container';
import * as Styled from './styles';
import { useColorCustomization } from '../../contexts/ColorCustomizationContext';


// Lazy loading components
const Navbar = lazy(() => import('../../components/Navbar'));
const HeroSection = lazy(() => import('../../components/HeroSection'));
const AboutSection = lazy(() => import('../../components/AboutSection'));
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
        <Suspense fallback={<div>Loading Navbar...</div>}>
            <Navbar />
          </Suspense>
        <Container type='home-container'>
          <Suspense fallback={<div>Loading Hero Section...</div>}>
            <HeroSection/>
          </Suspense>
          <Suspense fallback={<div>Loading About Section...</div>}>
            <AboutSection/>
          </Suspense>
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
