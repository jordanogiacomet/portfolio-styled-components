import { renderTheme } from '../../styles/render-theme';
import { OverlayMenu } from '.';
import { screen } from '@testing-library/react';

describe('<OverlayMenu />', () => {
  it('should render Overlay with children', () => {
    renderTheme(<OverlayMenu><div>text</div></OverlayMenu>);
    const element = screen.getByText('text');

    expect(element).toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<OverlayMenu><div>text</div></OverlayMenu>);
    
    expect(container).toMatchSnapshot();
  });
});