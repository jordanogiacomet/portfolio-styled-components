import { renderTheme } from '../../styles/render-theme';
import { Overlay } from '.';
import { screen } from '@testing-library/react';
import 'jest-styled-components';

describe('<Overlay />', () => {
  it('should render Overlay with children', () => {
    renderTheme(<Overlay type="example-type"><div>text</div></Overlay>);
    const element = screen.getByText('text');

    expect(element).toBeInTheDocument();
  });
  /*

  it('should apply the correct styles for a given type', () => {
    const { container } = renderTheme(
      <Overlay type="example-type">
        <div>text</div>
      </Overlay>
    );

    const wrapper = container.firstChild;
    // Add checks for styles specific to 'example-type'
    // Replace 'example-type-styles' with actual styles used in your component
    expect(wrapper).toHaveStyleRule('display', 'flex');
    expect(wrapper).toHaveStyleRule('justify-content', 'center');
    expect(wrapper).toHaveStyleRule('align-items', 'center');
    expect(wrapper).toHaveStyleRule('position', 'absolute');
    expect(wrapper).toHaveStyleRule('top', '0');
    expect(wrapper).toHaveStyleRule('left', '0');
    expect(wrapper).toHaveStyleRule('width', '100%');
    expect(wrapper).toHaveStyleRule('height', '100%');
    expect(wrapper).toHaveStyleRule('background', 'rgba(24, 24, 24, 0.8)');
  });

  */

  it('should apply additional className', () => {
    const { container } = renderTheme(
      <Overlay type="example-type" className="additional-class">
        <div>text</div>
      </Overlay>
    );

    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('additional-class');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <Overlay type="example-type">
        <div>text</div>
      </Overlay>
    );

    expect(container).toMatchSnapshot();
  });
});
