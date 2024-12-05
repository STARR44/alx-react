import Footer from "./Footer";
import {render, screen} from '@testing-library/react';

describe('Footer component', () => {
  beforeEach(() => {
    render (<Footer />);
  });

  test('renders element with the role contentinfo', () => {
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  test('renders the text “Copyright”', () => {
    const copyrightText = screen.getByText(/Copyright/);
    expect(copyrightText).toBeInTheDocument();
  });
});
