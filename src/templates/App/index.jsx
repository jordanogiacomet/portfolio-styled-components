import { AboutSection } from '../../components/AboutSection';
import { Container } from '../../components/Container';
import { EmaiLSection } from '../../components/EmailSection';
import { Footer } from '../../components/Footer';
import { HeroSection } from '../../components/HeroSection';
import { Navbar } from '../../components/Navbar';
import { ProjectSection } from '../../components/ProjectSection';
import * as Styled from './styles';

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper>
        <Navbar />
        <Container type='home-container'>
          <HeroSection />
          <AboutSection />
          <ProjectSection />
          <EmaiLSection />
        </Container>
        <Footer />
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
