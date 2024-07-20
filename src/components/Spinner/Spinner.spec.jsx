import { renderTheme } from '../../styles/render-theme';
import { Spinner } from '.';
import { screen } from '@testing-library/react';

describe('<Spinner />', () => {
  it('should render Spinner', () => {
    renderTheme(<Spinner />);
    const spinner = screen.getByRole('presentation');
    expect(spinner).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Spinner />);
    expect(container).toMatchSnapshot();
  });
});