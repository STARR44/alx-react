import React from 'react';
import {render, screen} from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList component', () => {
  test('renders CourseList component without crashing', () => {
    render(<CourseList />);
  });

  test('renders the 5 different course list rows', ()=> {
    render(<CourseList />);

    const CourseListRow = screen.getAllByRole('row');
    expect(CourseListRow.length).toBe(3);
  });
});
