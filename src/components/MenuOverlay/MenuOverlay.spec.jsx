import { renderTheme } from '../../styles/render-theme';
import { MenuOverlay } from '.';
import { screen } from '@testing-library/react';

const links = [
  { title: 'About', path: '#about' },
  { title: 'Projects', path: '#projects' },
  { title: 'Contact', path: '#contact' },
];

describe('<MenuOverlay />', () => {
  it('should render MenuOverlay with links', () => {
    renderTheme(<MenuOverlay links={links} />);

    links.forEach(link => {
      expect(screen.getByText(link.title)).toBeInTheDocument();
    });
  });
});