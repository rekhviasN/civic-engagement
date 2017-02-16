import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/locationBarActions';
import GoogleList from '../components/googleListComponent';
import LocationBar from '../components/locationBar';

class resultsComp extends React.Component {
  render() {
    const { data } = this.props;
    console.log("data", data);
    return (
      <div>
        <LocationBar />
        <GoogleList GoogleResults={data} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.GoogleResults.GoogleResults
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(resultsComp);
