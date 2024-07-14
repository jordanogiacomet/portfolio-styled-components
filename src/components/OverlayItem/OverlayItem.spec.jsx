import { renderTheme } from '../../styles/render-theme';
import { OverlayItem } from '.';
import { screen } from '@testing-library/react';

describe('<OverlayItem />', () => {
  it('should render Overlay with children', () => {
    renderTheme(<OverlayItem><div>text</div></OverlayItem>);
    const element = screen.getByText('text');

    expect(element).toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<OverlayItem><div>text</div></OverlayItem>);
    
    expect(container).toMatchSnapshot();
  });
});