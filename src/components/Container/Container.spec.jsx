import { screen } from '@testing-library/react';
import { Container } from '.';
import '@testing-library/jest-dom/extend-expect';
import { renderTheme } from '../../styles/render-theme';

describe('<Container />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<Container type="card-container">Children</Container>);
    expect(container).toMatchSnapshot();
  });

  it('should render Container with correct styles for card-container', () => {
    renderTheme(<Container type="card-container">Children</Container>);
    const container = screen.getByText('Children');
    expect(container).toHaveStyle(`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 5rem;
    `);
  });

  it('should render Container with correct styles for home-container', () => {
    renderTheme(<Container type="home-container">Children</Container>);
    const container = screen.getByText('Children');
    expect(container).toHaveStyle(`
      width: 100%;
      margin-top: 8rem;
      margin-left: auto;
      margin-right: auto;
      padding: 1rem 3rem;
    `);
  });
});
