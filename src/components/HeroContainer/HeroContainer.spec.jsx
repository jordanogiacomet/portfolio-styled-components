import { renderTheme } from '../../styles/render-theme';
import { HeroContainer} from '.';
import { screen } from '@testing-library/react';

describe('<HeroContainer />', () => {
  it('should render HeroContainer with children', () => {
    renderTheme(
      <HeroContainer>
        <div>Test</div>
      </HeroContainer>
    );
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<HeroContainer><div>Test</div></HeroContainer>);

    expect(container).toMatchSnapshot();
  });
});