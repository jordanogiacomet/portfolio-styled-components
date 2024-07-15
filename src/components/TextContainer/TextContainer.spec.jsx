import { renderTheme } from '../../styles/render-theme';
import { TextContainer } from '.';
import { screen } from '@testing-library/react';

describe('<TextContainer />', () => {
  it('should render TextContainer with children', () => {
    renderTheme(
      <TextContainer>
        <div>Test</div>
      </TextContainer>
    );
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<TextContainer><div>Test</div></TextContainer>);

    expect(container).toMatchSnapshot();
  });
});