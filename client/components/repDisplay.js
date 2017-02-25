import shortid from 'shortid';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import RepBillsList from '../components/repBillsList';
import ListView from './ListView';

import debug from '../actions/locationBarActions';

class RepDisplay extends Component {
  constructor(props) {
    super(props);
    
    // seed a location for testing
    this.props.debug('1216 broadway ny ny');
  }

  componentDidUpdate() {
    console.log('repDisplay.js componentDidUpdate');
    this.props.reps.forEach(rep => {
      console.log(rep);
    });
  }

  render() {
    const { reps } = this.props;
    // reps have been saved to state! this should always be populated.
    if (reps) {
      const display = reps.map((rep) => {
        const { name, party, phones } = rep;
        const chamber = rep.urls[0].split('.').reverse()[1];
        const title = (chamber === 'house') ?
          'House Representative' : 'Senator';

        // the ListView class should be something different from the other listView
        // i.e. render similar information differently
        return (
          <div key={shortid.generate()}>
            <ListView
              key={shortid.generate()}
              rawData={rep}
              title={title}
              name={name}
              party={party}
              phone={phones[0]}
            />
            <RepBillsList 
              rep={rep}
              key={shortid.generate()}
            />
          </div>
        );
      });
      return (
        <div>
          <div>{ display }</div>
          <div id="chart" />
        </div>
      );
    }
    // nothing!
    return (<div>you should not see this ever!</div>);
  }
}

function mapStateToProps(state) {
  return {
    reps: state.GoogleResults.reps
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ debug }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(RepDisplay);
