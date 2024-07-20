import { renderTheme } from '../../styles/render-theme';
import ScrollToTopButton from '.';
import { screen, fireEvent } from '@testing-library/react';

describe('<ScrollToTopButton />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<ScrollToTopButton />);
    expect(container).toMatchSnapshot();
  });

  it('should render ScrollToTopButton with icon', () => {
    renderTheme(<ScrollToTopButton />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button.querySelector('svg')).toBeInTheDocument();
  });

  it('should show button when scrolled down', () => {
    renderTheme(<ScrollToTopButton />);
    fireEvent.scroll(window, { target: { scrollY: 400 } });
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('opacity: 1');
  });

  it('should hide button when scrolled up', () => {
    renderTheme(<ScrollToTopButton />);
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('opacity: 0');
  });

  it('should scroll to top when clicked', () => {
    renderTheme(<ScrollToTopButton />);
    window.scrollTo = jest.fn();
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});
