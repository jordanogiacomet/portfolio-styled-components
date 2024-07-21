import { renderTheme } from '../../styles/render-theme';
import { ImageWrapper } from '.';
import { screen } from '@testing-library/react';
import 'jest-styled-components';

describe('<ImageWrapper />', () => {
  it('should render ImageWrapper with children', () => {
    renderTheme(
      <ImageWrapper type="hero-wrapper">
        <img src="/images/hero-image.webp" alt="hero image" />
      </ImageWrapper>
    );

    expect(screen.getByAltText('hero image')).toBeInTheDocument();
  });
 /*
  it('should apply the correct styles for type "hero-wrapper"', () => {
    const { container } = renderTheme(
      <ImageWrapper type="hero-wrapper">
        <img src="/images/hero-image.png" alt="hero image" />
      </ImageWrapper>
    );

    const wrapper = container.firstChild;
    expect(wrapper).toHaveStyleRule('border-radius', '9999px');
    expect(wrapper).toHaveStyleRule('background-color', '#181818');
    expect(wrapper).toHaveStyleRule('width', '250px');
    expect(wrapper).toHaveStyleRule('height', '250px');

    const img = screen.getByAltText('hero image');
    expect(img).toHaveStyleRule('position', 'absolute');
    expect(img).toHaveStyleRule('transform', 'translate(-50%, -50%)');
    expect(img).toHaveStyleRule('top', '50%');
    expect(img).toHaveStyleRule('left', '50%');
    expect(img).toHaveStyleRule('width', '100%');
    expect(img).toHaveStyleRule('height', '100%');
    expect(img).toHaveStyleRule('object-fit', 'cover');
    expect(img).toHaveStyleRule('border-radius', '9999px');
  });

  it('should apply the correct styles for type "about-wrapper"', () => {
    const { container } = renderTheme(
      <ImageWrapper type="about-wrapper">
        <img src="/images/about-image.png" alt="about image" />
      </ImageWrapper>
    );

    const wrapper = container.firstChild;
    expect(wrapper).toHaveStyleRule('margin-top', '4px');
    expect(wrapper).toHaveStyleRule('order', '2');

    const img = screen.getByAltText('about image');
    expect(img).toHaveStyleRule('display', 'block');
    expect(img).toHaveStyleRule('max-width', '100%');
    expect(img).toHaveStyleRule('height', 'auto');
    expect(img).toHaveStyleRule('border-radius', '10px');
    expect(img).toHaveStyleRule('box-shadow', '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)');
  });

 */ 
  it('should match snapshot', () => {
    const { container } = renderTheme(
      <ImageWrapper type="hero-wrapper">
        <img src="/images/hero-image.webp" alt="hero image" />
      </ImageWrapper>
    );

    expect(container).toMatchSnapshot();
  });
});
