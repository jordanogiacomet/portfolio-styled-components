import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Link } from '.';

describe('<Link />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(
      <Link href="/test">Content</Link>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render Link with children', () => {
    renderTheme(<Link href="/test">Content</Link>);
    const element = screen.getByText('Content');
    expect(element).toBeInTheDocument();
  });

  it('should render Link with correct href attribute', () => {
    renderTheme(<Link href="/test">Content</Link>);
    const element = screen.getByText('Content').closest('a');
    expect(element).toHaveAttribute('href', '/test');
  });
});
