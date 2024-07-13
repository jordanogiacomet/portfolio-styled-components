import { renderTheme } from '../../styles/render-theme';
import { HomeContainer } from '.';
import { screen } from '@testing-library/react';

describe('<HomeContainer />', () => {
  it('should render HomeContainer with children', () => {
    renderTheme(
      <HomeContainer>
        <div>Test</div>
      </HomeContainer>
    );
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
});