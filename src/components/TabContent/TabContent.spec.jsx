import { renderTheme } from '../../styles/render-theme';
import { TabContent } from '.';
import { screen } from '@testing-library/react';

describe('<TabContent />', () => {
  it('should render TabContent with children', () => {
    renderTheme(
      <TabContent>
        <div>Test</div>
      </TabContent>
    );
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<TabContent><div>Test</div></TabContent>);

    expect(container).toMatchSnapshot();
  });
});