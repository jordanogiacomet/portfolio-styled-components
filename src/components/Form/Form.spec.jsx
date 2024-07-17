import { screen } from '@testing-library/react';
import { Form } from '.';
import '@testing-library/jest-dom/extend-expect';
import { renderTheme } from '../../styles/render-theme';

describe('<Form />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<Form>Form content</Form>);
    expect(container).toMatchSnapshot();
  });

  it('should render Form with children', () => {
    renderTheme(<Form>Form content</Form>);
    expect(screen.getByText('Form content')).toBeInTheDocument();
  });
});