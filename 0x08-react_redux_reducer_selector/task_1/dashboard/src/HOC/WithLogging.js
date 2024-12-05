import React, { Component } from 'react';

function WithLogging(WrappedComponent) {
  class WithLogging extends Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name || 'Component'} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name || 'Component'} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  // Set the display name explicitly for debugging purposes
  WithLogging.displayName = `WithLogging(${WrappedComponent.name || 'Component'})`;

  return WithLogging;
}

export default WithLogging;
