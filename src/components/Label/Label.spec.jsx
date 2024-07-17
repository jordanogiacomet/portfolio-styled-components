import { Label } from '.';
import '@testing-library/jest-dom/extend-expect';
import { renderTheme } from '../../styles/render-theme';

describe('<Label />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<Label htmlFor="email">Your email</Label>);
    expect(container).toMatchSnapshot();
  });

  it('should render label with correct text', () => {
    const { getByText } = renderTheme(<Label htmlFor="email">Your email</Label>);
    const label = getByText('Your email');
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', 'email');
  });
});
