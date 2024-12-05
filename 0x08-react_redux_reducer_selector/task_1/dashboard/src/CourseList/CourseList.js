import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';

const styles = StyleSheet.create({
  table: {
    marginTop: '2em',
    width: '100%',
    border: '1px solid #ddd',
    fontSize: '1.2rem',
    marginBottom: '15em',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

const CourseList = ({ listCourses = [] }) => {
  return (
    <table id="CourseList" className={css(styles.table)} data-testid="CourseList">
      <thead>
        <CourseListRow
          textFirstCell="Available courses"
          isHeader={true}
        />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" />
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={String(course.credit)}
              isHeader={false}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

export default CourseList;
