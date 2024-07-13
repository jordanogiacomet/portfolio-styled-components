import { renderTheme } from '../../styles/render-theme';
import { ButtonWrapper } from '.';
import { screen } from '@testing-library/react';


describe('<ButtonWrapper />', () => {
  it('should render ButtonWrapper with children', () => {
    renderTheme(
    <ButtonWrapper>
      <div>
        test
      </div>
      </ButtonWrapper>);
      const element = screen.getByText('test');

      expect(element).toBeInTheDocument();
  });
});