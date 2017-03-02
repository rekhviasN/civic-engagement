import shortid from 'shortid';

import _ from 'underscore';
import Card from 'grommet/components/Card';
import Tab from 'grommet/components/Tab';
import Tabs from 'grommet/components/Tabs';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RepBio from './repBio';
import RepBillsList from './repBillsList';
import RepVoteStats from './repVoteStats';

import { bio, bills, votes } from '../actions/politicianSearchActions';
import testing from '../actions/locationBarActions';

/* this component will need a location
 * already searched and seeded into app state */
class RepDisplay extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      current: null
    };

    // seed a location and some reps for testing
    // this.props.testing('1216 broadway ny ny');
    const names = [
      'Charles E. Schumer',
      'Kirsten E. Gillibrand',
      'Carolyn B. Maloney'
    ];
    names.forEach((name) => {
      this.props.bio(name);
      this.props.bills(name);
      this.props.votes(name);
    });
    // delete the crap above for production
   
    // below should work for production
    // this.props.reps.forEach((name) => {
    //   this.props.bio(name);
    //   this.props.bills(name);
    //   this.props.votes(name);
    // });

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(current) {
    console.log(current);
    this.setState({ current });
  }

  render() {
    const { reps, propublica } = this.props;
    // reps have been saved to state! this should always be populated.
    
    if (Object.keys(propublica).length === 3) {   // (hopefully) can remove for deploy/production
      // this generates a set of graphs for each rep, might get scrapped
      /*const display = _.map(propublica, (rep) =>
        <div className="rep-focus" key={shortid.generate()}>
          <h1>{ rep.name }</h1>
          <RepBio
            key={shortid.generate()}
            propublicaRep={propublica[rep.name]}
          />
          <RepVoteStats
            key={shortid.generate()}
            rep={propublica[rep.name]}
          />
          <RepBillsList
            key={shortid.generate()}
            rep={propublica[rep.name]}
          />
        </div>
      );*/


      const tabArray = _.map(propublica, rep =>
        <Tab
          key={shortid.generate()}
          title={rep.name}
          onClick={() => this.handleClick(rep.name)} 
        />
      );

      let test;
      if (this.state.current !== null) {
        test = (
          <div className="rep-focus" key={shortid.generate()}>
            <h1>{ this.state.current }</h1>
            <RepVoteStats
              rep={propublica[this.state.current]}
            />
          </div>
        );
      }



      return (
        <div>
          <Tabs>
            { tabArray }
          </Tabs>
          { this.state.current ? (
            <div>{test}</div>
          ) : (
            <div>
              <hr />
              pick your rep!
              { /* {display} */ }
            </div>
          )}
        </div>
      );
    }  // closes the if block, to be removed

    // nothing!
    return (<div>you should not see this usually!</div>);
  }
}

function mapStateToProps(state) {
  return {
    reps: state.GoogleResults.reps,
    propublica: state.Propublica
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ testing, bills, bio, votes }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(RepDisplay);
