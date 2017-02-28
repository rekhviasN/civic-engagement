import React, { Component } from 'react';
import { connect } from 'react-redux';

import top20Search from '../actions/top20SearchActions';


class Top20Console extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.top20Search('pac-total', '2016');
  }

  render() {
    if (this.props.data) {
      const results = this.props.data.results;
      let spend = [];

      if (results) {
        spend = results.map((candidate, index) => {
          return (
            <div
              key={index}
            >
              {candidate}
            </div>
          )
        });

        return (
          <div>
            { spend }
          </div>
        );
      }
    }
    return (
      <div>
        <h3>Loading</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.Propublica.Top20
  };
}

export default connect(mapStateToProps, { top20Search })(Top20Console);
