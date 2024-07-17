import { renderTheme } from '../../styles/render-theme';
import { Socials } from '.';
import { screen } from '@testing-library/react';

describe('<Socials />', () => {
  it('should render Socials with children', () => {
    renderTheme(
      <Socials>
        <div>Social Link 1</div>
        <div>Social Link 2</div>
      </Socials>
    );
    const element1 = screen.getByText('Social Link 1');
    const element2 = screen.getByText('Social Link 2');

    expect(element1).toBeInTheDocument();
    expect(element2).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <Socials>
        <div>Social Link 1</div>
        <div>Social Link 2</div>
      </Socials>
    );

    expect(container).toMatchSnapshot();
  });
});
