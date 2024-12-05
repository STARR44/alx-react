import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import BodySection from './BodySection';

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className={css(styles.bodySectionWithMargin)} role="region">
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  Children: PropTypes.node,
};

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: "40px",
  }
})

export default BodySectionWithMarginBottom;
