import { renderTheme } from '../../styles/render-theme';
import { InnerButton } from '.';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';

describe('<InnerButton />', () => {
  it('should render inner button with children', () => {
    renderTheme(<InnerButton>Click</InnerButton>);
    const button = screen.getByText('Click');

    expect(button).toBeInTheDocument();
  });

  it('should apply inner button with downloadCV type styles', () => {
    const { container } = renderTheme(<InnerButton type="downloadCV">Click</InnerButton>);
    
    expect(container.firstChild).toHaveStyleRule('background-color', theme.button.downloadCV.innerBgColor);
    expect(container.firstChild).toHaveStyleRule('padding', theme.button.downloadCV.innerPadding);
    expect(container.firstChild).toHaveStyleRule('border-radius', theme.button.downloadCV.borderRadius);
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(
      <InnerButton imgUrl="/test.jpg">Content</InnerButton>
    );
    expect(container).toMatchSnapshot();
  });
});