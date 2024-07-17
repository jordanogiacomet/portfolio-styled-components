import { renderTheme } from '../../styles/render-theme';
import { Section } from '.';
import { screen } from '@testing-library/react';
import 'jest-styled-components';

describe('<Section />', () => {
  it('should render Section with children', () => {
    renderTheme(
      <Section type="hero-section">
        <div>Hero Section Content</div>
      </Section>
    );
    const element = screen.getByText('Hero Section Content');

    expect(element).toBeInTheDocument();
  });

  it('should apply the correct styles for hero-section', () => {
    const { container } = renderTheme(
      <Section type="hero-section">
        <div>Hero Section Content</div>
      </Section>
    );

    const wrapper = container.firstChild;
    expect(wrapper).toHaveStyleRule('display', 'grid');
    expect(wrapper).toHaveStyleRule('grid-template-columns', 'repeat(1, 1fr)');
  });

  it('should apply the correct styles for about-section', () => {
    const { container } = renderTheme(
      <Section type="about-section">
        <div>About Section Content</div>
      </Section>
    );

    const wrapper = container.firstChild;
    expect(wrapper).toHaveStyleRule('color', 'white');
    expect(wrapper).toHaveStyleRule('padding', '50px 0px');
    expect(wrapper).toHaveStyleRule('display', 'flex');
    expect(wrapper).toHaveStyleRule('flex-direction', 'column');
  });

  it('should apply the correct styles for projects-section', () => {
    const { container } = renderTheme(
      <Section type="projects-section">
        <div>Projects Section Content</div>
      </Section>
    );

    const wrapper = container.firstChild;
    expect(wrapper).toHaveStyleRule('margin-top', '30px');
    expect(wrapper).toHaveStyleRule('margin-bottom', '240px');
    expect(wrapper).toHaveStyleRule('text-align', 'left');
    expect(wrapper).toHaveStyleRule('display', 'flex');
    expect(wrapper).toHaveStyleRule('flex-direction', 'column');
  });

  it('should apply the correct styles for email-section', () => {
    const { container } = renderTheme(
      <Section type="email-section">
        <div>Email Section Content</div>
      </Section>
    );

    const wrapper = container.firstChild;
    expect(wrapper).toHaveStyleRule('display', 'grid');
    expect(wrapper).toHaveStyleRule('grid-template-columns', 'repeat(1, 1fr)');
    expect(wrapper).toHaveStyleRule('margin-bottom', '100px');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <Section type="hero-section">
        <div>Hero Section Content</div>
      </Section>
    );

    expect(container).toMatchSnapshot();
  });
});
