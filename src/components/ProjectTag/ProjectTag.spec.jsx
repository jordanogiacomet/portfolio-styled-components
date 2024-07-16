// ProjectTag.spec.jsx
import { renderTheme } from '../../styles/render-theme';
import ProjectTag from '.';

describe('<ProjectTag />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<ProjectTag name="Test" onClick={() => {}} isSelected={false} />);
    expect(container).toMatchSnapshot();
  });

  it('should render ProjectTag with correct props', () => {
    const { getByText } = renderTheme(<ProjectTag name="Test" onClick={() => {}} isSelected={false} />);
    expect(getByText('Test')).toBeInTheDocument();
  });
});