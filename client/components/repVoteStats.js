import React, { Component } from 'react';
import shortid from 'shortid';

import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';

import Layer from 'grommet/components/Layer';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

import Title from 'grommet/components/Title';

import RepVoteStatsDoughnut from './repVoteStatsDoughnut';
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
    if (rep && rep.votes) {
      const { votes } = rep;

      voteDisplay = votes.map(vote =>
        (
          <ListItem key={shortid.generate()}>
            <VoteDetails vote={vote} />
          </ListItem>
        )
      );
    }

    const style = {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column'
    };

    return (
      <div style={style} >
        <Title>Last 100 votes</Title>
        <RepVoteStatsDoughnut rep={rep} />
        <button
          style={{ align: "center", marginTop: '1em' }} 
          onClick={() => this.handleClick(rep.name)}
        >Recent Voting Record
        </button>
        { this.state.expanded ?
          (
            <Layer
              closer={true}
              onClose={() => this.setState({ expanded: false })}
            >
              <List>{voteDisplay}</List>
            </Layer>
          ) : (
            <div />
          )
        }
      </div>
    );
  }
}

repVoteStats.propTypes = {
};
repVoteStats.defaultProps = {
};
export default repVoteStats;
