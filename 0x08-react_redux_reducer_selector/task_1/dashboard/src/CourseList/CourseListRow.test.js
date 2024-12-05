import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
  test('renders a single header cell with colspan=2 when isHeader is true and textSecondCell is null', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Header Text" />
        </tbody>
      </table>
    );

    const thElement = screen.getByRole('columnheader');
    expect(thElement).toBeInTheDocument();
    expect(thElement).toHaveAttribute('colSpan', '2');
  });

  test('renders two header cells when textSecondCell is present', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />
        </tbody>
      </table>
    );

    const thElements = screen.getAllByRole('columnheader');
    expect(thElements).toHaveLength(2);
  });

  test('renders two data cells when isHeader is false', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={false} textFirstCell="Cell 1" textSecondCell="Cell 2" />
        </tbody>
      </table>
    );

    const tdElements = screen.getAllByRole('cell');
    expect(tdElements).toHaveLength(2);
  });

  /*
  test('applies header background color style when isHeader is true', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />
        </tbody>
      </table>
    );

    const rowElement = screen.getByRole('row');
    expect(rowElement).toHaveStyle('background-color: #deb5b545');
  });


  test('applies row background color style when isHeader is false', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={false} textFirstCell="Cell 1" textSecondCell="Cell 2" />
        </tbody>
      </table>
    );

    const rowElement = screen.getByRole('row');
    expect(rowElement).toHaveStyle('background-color: #f5f5f5ab');
  });
  */
});
