import React, { Component } from 'react';
import shortid from 'shortid';

import Card from 'grommet/components/Card';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';

import RepVoteStatsDoughnut from './repVoteStatsDoughnut';
import RepVoteStatsLineGraph from './repVoteStatsLineGraph';
import VoteDetails from './voteDetails';

class repVoteStats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  handleClick() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    let voteDisplay;
    const { rep } = this.props;
    if (rep && rep.votes ) {
      const { votes } = rep;

      voteDisplay = votes.map(vote =>
        (<VoteDetails
          key={shortid.generate()}
          vote={vote}
        />)
      );
    }

    return (
      <div>
        <div>Last 100 votes:<br />
          <RepVoteStatsDoughnut rep={rep} />
        </div>
        <div>
          <RepVoteStatsLineGraph rep={rep} />
        </div>
        <button onClick={() => this.handleClick(rep.name)}>
          stuff voted on
        </button>
        { this.state.expanded ? (<div>{voteDisplay}</div>) : (<div />) }
      </div>
    );
  }
}

repVoteStats.propTypes = {
};
repVoteStats.defaultProps = {
};
export default repVoteStats;
