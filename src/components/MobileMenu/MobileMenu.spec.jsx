import { renderTheme } from '../../styles/render-theme';
import { MobileMenu } from '.';
import { screen } from '@testing-library/react';

describe('<Mobile Menu />', () => {
  it('should render with children', () => {
    renderTheme(<MobileMenu><div>text</div></MobileMenu>);
    const element = screen.getByText('text');

    expect(element).toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<MobileMenu><div>text</div></MobileMenu>);

    expect(container).toMatchSnapshot();
  })
});