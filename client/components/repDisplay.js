import _ from 'underscore';
import shortid from 'shortid';

import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';
import Tab from 'grommet/components/Tab';
import Tabs from 'grommet/components/Tabs';
import Spinning from 'grommet/components/icons/Spinning';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RepBio from './repBio';
import RepBillsList from './repBillsList';
import RepVoteStats from './repVoteStats';

import RepVoteStatsLineGraph from './repVoteStatsLineGraph';
import RepVoteStatsDoughnut from './repVoteStatsDoughnut';

import { bio, bills, votes } from '../actions/politicianSearchActions';
import testing from '../actions/locationBarActions';

import { Propublica, google_reps } from './defaultProps';

/* this component will need a location
 * already searched and seeded into app state */
class RepDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // count: 0,
      current: null
    };

    // fire off propublica actions
    this.props.reps.forEach(({ name }) => {
      this.props.bio(name);
      this.props.bills(name);
      this.props.votes(name);
    });

    setTimeout(() => {
      // this.setState({ current: this.props.reps[0].name });
      this.handleClick(this.props.reps[0].name);
      console.log('remove spinner: ', this.props.reps[0].name);
    }, 1000);
    this.handleClick = this.handleClick.bind(this);
  }

  // componentWillReceiveProps() {
  //   // this.setState({ count: this.state.count + 1 });

  //   // if (this.state.count === 8) {
  //   // }
  // }

  handleClick(current) {
    console.log(current);
    if (this.state.current !== current) {
      this.setState({ current });
    }
  }

  render() {
    // reps have been saved to state! this should always be populated.
    const { reps, propublica } = this.props;

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
        title={rep.name || ''}
        onClick={() => this.handleClick(rep.name)}
      />
    );

    /* <div className="rep-focus" key={shortid.generate()}> */
    const graphs = (
      <RepVoteStats rep={propublica[this.state.current]} />
    );

    // parse the correct obj from the GoogleResults
    const rep = reps.filter(({ name }) => name === this.state.current)[0];

    return (
      <div>
        <Tabs>{ tabArray }</Tabs>
        { this.state.current ? (
          <Columns>
            <Box>
              <RepBio
                key={shortid.generate()}
                bio={propublica[this.state.current]}
                google={rep}
              />
            </Box>
            <Box>
              <RepVoteStats rep={propublica[this.state.current]} />
            </Box>
            <Box>
              <RepVoteStatsLineGraph rep={propublica[this.state.current]} />
            </Box>
            <Box>
              <RepVoteStatsDoughnut rep={propublica[this.state.current]} />
            </Box>
          </Columns>
        ) : (
          <div>
            <Spinning /> fetching congressional activity
          </div>
        )}
      </div>
    );
  }
}

RepDisplay.defaultProps = {
  propublica: Propublica,
  reps: [
    {
      name: 'Charles E. Schumer',
      address: [
        {
          line1: '322 Hart Senate Office Building',
          city: 'Washington',
          state: 'DC',
          zip: '20510'
        }
      ],
      party: 'Democratic',
      phones: [
        '(202) 224-6542'
      ],
      urls: [
        'http://www.schumer.senate.gov/'
      ],
      photoUrl: 'http://bioguide.congress.gov/bioguide/photo/S/S000148.jpg',
      channels: [
        {
          type: 'Facebook',
          id: 'chuckschumer'
        },
        {
          type: 'Twitter',
          id: 'SenSchumer'
        },
        {
          type: 'YouTube',
          id: 'SenatorSchumer'
        }
      ]
    },
    {
      name: 'Kirsten E. Gillibrand',
      address: [
        {
          line1: '478 Russell Senate Office Building',
          city: 'Washington',
          state: 'DC',
          zip: '20510'
        }
      ],
      party: 'Democratic',
      phones: [
        '(202) 224-4451'
      ],
      urls: [
        'http://www.gillibrand.senate.gov/'
      ],
      photoUrl: 'http://bioguide.congress.gov/bioguide/photo/G/G000555.jpg',
      channels: [
        {
          type: 'Facebook',
          id: 'KirstenGillibrand'
        },
        {
          type: 'Twitter',
          id: 'SenGillibrand'
        },
        {
          type: 'YouTube',
          id: 'KirstenEGillibrand'
        }
      ]
    },
    {
      name: 'Carolyn B. Maloney',
      address: [
        {
          line1: '2308 Rayburn House Office Building',
          city: 'Washington',
          state: 'DC',
          zip: '20515'
        }
      ],
      party: 'Democratic',
      phones: [
        '(202) 225-7944'
      ],
      urls: [
        'http://maloney.house.gov/'
      ],
      photoUrl: 'http://maloney.house.gov/sites/maloney.house.gov/files/styles/medium/public/wysiwyg_uploaded/CMaloney.jpg?itok=MfBXZlLs',
      channels: [
        {
          type: 'Twitter',
          id: 'RepMaloney'
        },
        {
          type: 'Facebook',
          id: 'CarolynMaloney'
        },
        {
          type: 'YouTube',
          id: 'carolynbmaloney'
        }
      ]
    }
  ]
  // reps: google_reps
  // [
  //   { name: 'Charles E. Schumer' },
  //   { name: 'Kirsten E. Gillibrand' },
  //   { name: 'Carolyn B. Maloney' }
  // ]
};
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
