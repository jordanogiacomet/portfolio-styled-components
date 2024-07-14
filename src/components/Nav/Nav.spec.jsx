import { renderTheme } from '../../styles/render-theme';
import { Nav } from '.';
import { screen } from '@testing-library/react';

describe('<Nav />', () => {
  it('should render Nav with children', () => {
    renderTheme(<Nav><div>text</div></Nav>);
    const element = screen.getByText('text');

    expect(element).toBeInTheDocument();
  });
});