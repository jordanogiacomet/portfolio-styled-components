import { renderTheme } from '../../styles/render-theme';
import { Menu } from '.';
import { screen } from '@testing-library/react';

describe('<Menu />', () => {
  it('should render menu with children', () => {
    renderTheme(<Menu><div>text</div></Menu>);
    const element = screen.getByText('text');

    expect(element).toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<Menu><div>text</div></Menu>);
    
    expect(container).toMatchSnapshot();
  });
});