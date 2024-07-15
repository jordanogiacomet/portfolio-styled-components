import { renderTheme } from '../../styles/render-theme';
import { AboutImageWrapper } from '.';
import { screen } from '@testing-library/react';


describe('<AboutImageWrapper />', () => {
  it('should render AboutImageWrapper with children', () => {
    renderTheme(
    <AboutImageWrapper>
      <div>
        test
      </div>
      </AboutImageWrapper>);
      const element = screen.getByText('test');

      expect(element).toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<AboutImageWrapper><div>test</div></AboutImageWrapper>);

    expect(container).toMatchSnapshot();
  });
});