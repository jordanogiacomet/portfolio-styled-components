import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { CardContainer } from '.';

describe('<CardContainer />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<CardContainer>Content</CardContainer>);
    expect(container).toMatchSnapshot();
  });

  it('should render CardContainer with children', () => {
    renderTheme(<CardContainer>Content</CardContainer>);
    const element = screen.getByText('Content');
    expect(element).toBeInTheDocument();
  });
});