import { renderTheme } from '../../styles/render-theme';
import { List } from '.';
import { screen } from '@testing-library/react';


describe('<List />', () => {
  it('should render List with children', () => {
    renderTheme(
    <List>
      <li>text</li> 
    </List>);
      const element = screen.getByText('text');

      expect(element).toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<List><li>text</li></List>);

    expect(container).toMatchSnapshot();
  });
});