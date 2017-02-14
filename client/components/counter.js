import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { incCounter, decCounter } from '../actions/counterActions';

class Counter extends Component {
  render() {
    console.log('rendered counter component');
    return (
      <button
        onClick={() => {
          console.log('clicky clicky');
          return {
            type: 'INCREMENT',
          }
          // incCounter;
        }}
      >
      Count: { this.props.count }
      </button>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ incCounter, decCounter }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
