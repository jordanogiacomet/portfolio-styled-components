import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TagContainer } from '.';

describe('<TagContainer />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<TagContainer>Test</TagContainer>);
    expect(container).toMatchSnapshot();
  });

  it('should render TagContainer with children', () => {
    renderTheme(<TagContainer>Test</TagContainer>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});