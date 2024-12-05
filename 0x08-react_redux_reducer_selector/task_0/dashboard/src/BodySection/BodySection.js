import React, {Component} from 'react';

class BodySection extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className="BodySection">
        <h2>{title}</h2>
        {children}
      </div>
    )
  }
}

export default BodySection;
