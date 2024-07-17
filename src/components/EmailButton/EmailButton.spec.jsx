import { screen } from '@testing-library/react';
import { EmailButton } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<EmailButton />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<EmailButton type="submit">Send</EmailButton>);
    expect(container).toMatchSnapshot();
  });

  it('should render EmailButton with correct children', () => {
    renderTheme(<EmailButton type="submit">Send</EmailButton>);
    const button = screen.getByText('Send');
    expect(button).toBeInTheDocument();
  });

  it('should have the correct type attribute', () => {
    renderTheme(<EmailButton type="submit">Send</EmailButton>);
    const button = screen.getByText('Send');
    expect(button).toHaveAttribute('type', 'submit');
  });
});
