import { renderTheme } from '../../styles/render-theme';
import { TabContainerButton } from '.';
import { screen } from '@testing-library/react';

describe('<TabContainerButton />', () => {
  it('should render TabContainerButton with children', () => {
    renderTheme(
      <TabContainerButton>
        <div>Test</div>
      </TabContainerButton>
    );
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<TabContainerButton><div>Test</div></TabContainerButton>);

    expect(container).toMatchSnapshot();
  });
});