// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock aphrodite in tests to resolve the type error isssue:
// TypeError: Cannot read properties of null (reading 'querySelector')
jest.mock('aphrodite', () => {
  const mockStyleSheet = {
    create: () => ({}),
    css: () => "",
  };
  return { StyleSheet: mockStyleSheet, css: mockStyleSheet.css };
});
