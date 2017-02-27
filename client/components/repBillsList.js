import _ from 'underscore';
import shortid from 'shortid';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { bio as search } from '../actions/politicianSearchActions';

class RepBillsList extends Component {
  constructor(props) {
    super(props);
    // propublica lookup for 2 senators + rep
    const { rep } = props;

  }

  render() {
    return <div>rep bills list: nothing!</div>;
  }
}

function mapStateToProps(state) {
  return {
    district: state.GoogleResults.district
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ search }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(RepBillsList);
// export default RepBillsList;
