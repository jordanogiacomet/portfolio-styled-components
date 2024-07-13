import { renderTheme } from '../../styles/render-theme';
import { NavLink } from '.';
import { screen } from '@testing-library/react';

describe('<NavLink />', () => {
  it('should render with children', () => {
    renderTheme(<NavLink href="http://localhost">Link</NavLink>);
    const link = screen.getByRole('link', { name: 'Link' });

    expect(link).toHaveAttribute('target', '_self');
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLink href="http://localhost">Link</NavLink>);

    expect(container).toMatchSnapshot();
  });
});


