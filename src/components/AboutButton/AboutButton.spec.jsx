import { screen, fireEvent } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { AboutButton } from '.';

describe('<AboutButton />', () => {
  it('should render with children', () => {
    renderTheme(<AboutButton active={false} selectTab={() => {}}>Skills</AboutButton>);
    expect(screen.getByText('Skills')).toBeInTheDocument();
  });

  it('should call selectTab on click', () => {
    const handleClick = jest.fn();
    renderTheme(<AboutButton active={false} selectTab={handleClick}>Skills</AboutButton>);
    fireEvent.click(screen.getByText('Skills'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should apply active styles when active', () => {
    renderTheme(<AboutButton active={true} selectTab={() => {}}>Skills</AboutButton>);
    expect(screen.getByText('Skills')).toHaveStyle('color: #1E90FF'); // Ajuste de acordo com os estilos ativos
  });

  it('should apply hover styles on mouse over', () => {
    renderTheme(<AboutButton active={false} selectTab={() => {}}>Skills</AboutButton>);
    fireEvent.mouseOver(screen.getByText('Skills'));
    expect(screen.getByText('Skills')).toHaveStyle('color: #1E90FF'); // Ajuste de acordo com os estilos de hover
  });
});