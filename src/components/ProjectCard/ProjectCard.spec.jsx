import { renderTheme } from '../../styles/render-theme';
import { ProjectCard } from '.';

describe('<ProjectCard />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(
      <ProjectCard
        imgUrl="/test.jpg"
        title="Test Project"
        gitUrl="/git"
        previewUrl="/preview"
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('should render ProjectCard with all props', () => {
    const { getByText } = renderTheme(
      <ProjectCard
        imgUrl="/test.jpg"
        title="Test Project"
        gitUrl="/git"
        previewUrl="/preview"
      />
    );
    expect(getByText('Test Project')).toBeInTheDocument();
  });
});