import { renderTheme } from '../../styles/render-theme';
import { ImageWrapper } from '.';
import { screen } from '@testing-library/react';


describe('<ImageWrapper />', () => {
  it('should render ImageWrapper with children', () => {
    renderTheme(
      <ImageWrapper>
        <img src="/images/hero-image.png" alt="hero image" />
      </ImageWrapper>
    );
    
    expect(screen.getByAltText('hero image')).toBeInTheDocument();
  });

  it('should apply default styles', () => {
    const { container } = renderTheme(
      <ImageWrapper>
        <img src="/images/hero-image.png" alt="hero image" />
      </ImageWrapper>
    );
    
    const wrapper = container.firstChild;
    
    expect(wrapper).toHaveStyleRule('border-radius', '9999px');
    expect(wrapper).toHaveStyleRule('background-color', '#181818');
    expect(wrapper).toHaveStyleRule('width', '250px');
    expect(wrapper).toHaveStyleRule('height', '250px');
    expect(wrapper).toHaveStyleRule('position', 'relative');
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<ImageWrapper><img src="/images/hero-image.png" alt="hero image" /></ImageWrapper>);

    expect(container).toMatchSnapshot();
  });
});