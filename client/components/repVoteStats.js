import React, { Component } from 'react';
import shortid from 'shortid';

import { Doughnut } from 'react-chartjs-2';

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
    const graphData = {
      labels: ['Yes', 'No', 'Present'],
      datasets: [
        {
          data: [0, 0, 0],
          backgroundColor: ['Blue', 'Red', 'Purple'],
          hoverBackgroundColor: ['Blue', 'Red', 'Purple']
        }]
    };
    const options = {
      // animationSteps: 100,
      // animationEasing: 'easeOutBounce',
      // animateRotate: true
    };

    let voteDisplay;
    const { rep } = this.props;
    if (rep && rep.votes) {
      const { votes } = rep;

      voteDisplay = votes.map((vote) => {
        const { data } = graphData.datasets[0];
        if (vote.position === 'Yes') data[0] += 1;
        if (vote.position === 'No') data[1] += 1;
        if (vote.position === 'Present') data[2] += 1;

        return (
          <VoteDetails
            key={shortid.generate()}
            vote={vote}
          />
        );
      });
    }

    return (
      <div>
        <div>Last 100 votes:<br />
          <Doughnut data={graphData} options={options} />
        </div>
        <button onClick={() => this.handleClick()}>
          click to see the shit this person voted on!
        </button>
        { this.state.expanded ?
          (
            <div>{ voteDisplay }</div>
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
