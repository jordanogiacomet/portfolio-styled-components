import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ProjectOverlay } from '.';

describe('<ProjectOverlay />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<ProjectOverlay>Test</ProjectOverlay>);
    expect(container).toMatchSnapshot();
  });

  it('should render ProjectOverlay with children', () => {
    renderTheme(<ProjectOverlay>Test</ProjectOverlay>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});