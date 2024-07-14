import { renderTheme } from '../../styles/render-theme';
import { MenuButton } from '.';
import { screen, fireEvent } from '@testing-library/react';

describe('<MenuButton />', () => {
  it('should render MenuButton with children', () => {
    renderTheme(<MenuButton onClick={() => {}}>Click me</MenuButton>);
    const button = screen.getByText('Click me');

    expect(button).toBeInTheDocument();
  });

  it('should call onClick when button is clicked', () => {
    const handleClick = jest.fn();
    renderTheme(<MenuButton onClick={handleClick}>Click me</MenuButton>);
    const button = screen.getByText('Click me');

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});