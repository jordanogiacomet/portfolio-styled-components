import { screen, fireEvent } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { AboutButton } from '.';

describe('<AboutButton />', () => {
  it('should render with children', () => {
    renderTheme(<AboutButton active={false} selectTab={() => {}}>Hard Skills</AboutButton>);
    expect(screen.getByText('Hard Skills')).toBeInTheDocument();
  });

  it('should call selectTab on click', () => {
    const handleClick = jest.fn();
    renderTheme(<AboutButton active={false} selectTab={handleClick}>Hard Skills</AboutButton>);
    fireEvent.click(screen.getByText('Hard Skills'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should apply active styles when active', () => {
    renderTheme(<AboutButton active={true} selectTab={() => {}}>Hard Skills</AboutButton>);
    expect(screen.getByText('Hard Skills')).toHaveStyle({ color: '#1E90FF' }); // Ajuste de acordo com os estilos ativos
  });

  it('should apply hover styles on mouse over', () => {
    renderTheme(<AboutButton active={false} selectTab={() => {}}>Hard Skills</AboutButton>);
    fireEvent.mouseOver(screen.getByText('Hard Skills'));
    expect(screen.getByText('Hard Skills')).toHaveStyle({ color: '#1E90FF' }); // Ajuste de acordo com os estilos de hover
  });
});
