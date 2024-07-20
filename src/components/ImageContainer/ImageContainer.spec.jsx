import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ImageContainer } from '.';

describe('<ImageContainer />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(
      <ImageContainer imgUrl="/test.jpg">Content</ImageContainer>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render ImageContainer with children', () => {
    renderTheme(<ImageContainer imgUrl="/test.jpg">Content</ImageContainer>);
    const element = screen.getByText('Content');
    expect(element).toBeInTheDocument();
  });

  it('should render ImageContainer with background image', () => {
    renderTheme(<ImageContainer imgUrl="/test.jpg">Content</ImageContainer>);
    const element = screen.getByText('Content').parentElement;
    expect(element).toHaveStyle('background: url(/test.jpg) no-repeat center center/cover');
  });
});
