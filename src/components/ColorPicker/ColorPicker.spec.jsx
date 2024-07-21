import { renderTheme } from '../../styles/render-theme';
import { ColorPicker } from '.';
import { screen } from '@testing-library/react';


describe('<ColorPicker />', () => {
  it('should render ColorPicker with default colors', () => {
    renderTheme(<ColorPicker />);
    expect(screen.getByText('Cor do Texto')).toBeInTheDocument();
    expect(screen.getByText('Cor do Fundo')).toBeInTheDocument();
    expect(screen.getByText('Cores do Gradiente')).toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<ColorPicker />);
    expect(container).toMatchSnapshot();
  });
});
