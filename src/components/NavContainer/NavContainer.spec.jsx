import { renderTheme } from '../../styles/render-theme';
import { NavContainer } from '.';
import { screen } from '@testing-library/react';

describe('<NavContainer />', () => {
  it('should render NavContainer with children', () => {
    renderTheme(<NavContainer><div>text</div></NavContainer>);
    const element = screen.getByText('text');

    expect(element).toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<NavContainer><div>text</div></NavContainer>);
    
    expect(container).toMatchSnapshot();
  });
});