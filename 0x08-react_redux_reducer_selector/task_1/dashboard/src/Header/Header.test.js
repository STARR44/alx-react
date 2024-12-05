import Header from './Header';
import {render, screen} from '@testing-library/react';


describe('Header component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  test('renders a div with the class App-header', () => {
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  test('renders img and h1 tags in Header component', () => {
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();

    const heading = screen.getByRole('heading', {level: 1});
    expect(heading).toBeInTheDocument();
  });
});
