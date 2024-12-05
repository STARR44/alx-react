import React from 'react';
import { render } from '@testing-library/react';
import WithLogging from './WithLogging';

describe('WithLogging HOC', () => {
  beforeEach(() => {
    // Mock console.log before each test
    console.log = jest.fn();
  });

  afterEach(() => {
    // Restore console.log after each test
    jest.clearAllMocks();
  });

  it('logs on mount and unmount for a named component', () => {
    const NamedComponent = () => <div />;
    const WrappedComponent = WithLogging(NamedComponent);

    const { unmount } = render(<WrappedComponent />);
    expect(console.log).toHaveBeenCalledWith('Component NamedComponent is mounted');

    unmount();
    expect(console.log).toHaveBeenCalledWith('Component NamedComponent is going to unmount');
  });

  it('logs on mount and unmount with "Component" for unnamed component', () => {
    const WrappedComponent = WithLogging(() => <div />);

    const { unmount } = render(<WrappedComponent />);
    expect(console.log).toHaveBeenCalledWith('Component Component is mounted');

    unmount();
    expect(console.log).toHaveBeenCalledWith('Component Component is going to unmount');
  });
});
