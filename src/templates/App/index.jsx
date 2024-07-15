import { AboutSection } from '../../components/AboutSection';
import { HeroSection } from '../../components/HeroSection';
import { HomeContainer } from '../../components/HomeContainer';
import { Navbar } from '../../components/Navbar';
import * as Styled from './styles';

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper>
        <Navbar />
        <HomeContainer>
          <HeroSection />
          <AboutSection />
        </HomeContainer>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
