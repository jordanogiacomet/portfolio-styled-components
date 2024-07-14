import { renderTheme } from '../../styles/render-theme';
import { Overlay } from '.';
import { screen } from '@testing-library/react';

describe('<Overlay />', () => {
  it('should render Overlay with children', () => {
    renderTheme(<Overlay><div>text</div></Overlay>);
    const element = screen.getByText('text');

    expect(element).toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<Overlay><div>text</div></Overlay>);
    
    expect(container).toMatchSnapshot();
  });
});