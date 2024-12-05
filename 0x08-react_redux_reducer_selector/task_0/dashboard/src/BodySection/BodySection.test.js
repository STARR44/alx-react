import React from 'react';
import { render, screen } from '@testing-library/react';
import BodySection from './BodySection';

describe('BodySection component', () => {
  test('renders correctly with title and children', () => {
    render(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    // Check for the h2 element with correct text
    const titleElement = screen.getByRole('heading', { level: 2 });
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('test title');

    // Check for the p element with correct text
    const paragraphElement = screen.getByText('test children node');
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement.tagName).toBe('P');
  });
});
