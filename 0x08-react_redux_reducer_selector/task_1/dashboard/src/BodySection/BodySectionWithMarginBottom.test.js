import React from 'react';
import { render, screen } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom component', () => {
  test('renders BodySection with correct props', () => {
    render(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    // Check that the outer div is in the document
    const outerDiv = screen.getByRole('region');
    expect(outerDiv).toBeInTheDocument();

    // Check for the h2 element inside BodySection
    const titleElement = screen.getByRole('heading', { level: 2 });
    expect(titleElement).toHaveTextContent('test title');

    // Check for the child content
    const paragraphElement = screen.getByText('test children node');
    expect(paragraphElement).toBeInTheDocument();
  });
});
