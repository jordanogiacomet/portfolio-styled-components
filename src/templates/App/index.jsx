import { Heading } from '../../components/Heading';
import { HeroSection } from '../../components/HeroSection';
import { HomeContainer } from '../../components/HomeContainer';
import * as Styled from './styles';

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper>
        <HomeContainer>
          <HeroSection />
        </HomeContainer>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
