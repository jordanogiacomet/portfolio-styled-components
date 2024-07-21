import { renderTheme } from '../../styles/render-theme';
import { ProjectSection } from '.';

describe('<ProjectSection />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<ProjectSection />);
    expect(container).toMatchSnapshot();
  });

  it('should render ProjectSection with correct elements', () => {
    const { getByText } = renderTheme(<ProjectSection />);
    expect(getByText('Projetos')).toBeInTheDocument();
    expect(getByText('React Portfolio Website')).toBeInTheDocument();
  });
});