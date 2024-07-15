import { AboutSection } from '../../components/AboutSection';
import { HeroSection } from '../../components/HeroSection';
import { HomeContainer } from '../../components/HomeContainer';
import { Navbar } from '../../components/Navbar';
import { ProjectSection } from '../../components/ProjectSection';
import * as Styled from './styles';

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper>
        <Navbar />
        <HomeContainer>
          <HeroSection />
          <AboutSection />
          <ProjectSection />
        </HomeContainer>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
