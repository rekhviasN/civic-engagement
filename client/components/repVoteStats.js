import React, { Component } from 'react';
import shortid from 'shortid';

import Card from 'grommet/components/Card';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';

import { Doughnut, Line } from 'react-chartjs-2';

import VoteDetails from './voteDetails';

class repVoteStats extends Component {
  constructor(props) {
    super(props);
    // hacky force refresh
    // setTimeout(() => {this.setState(this.state)}, 100);
  }

  render() {
    const doughOptions = {
      animationSteps: 100,
      animationEasing: 'easeOutBounce',
      animateRotate: true,
      responsive: false,
      maintainAspectRatio: false
    };

    const lineOptions = {
      animationSteps: 100,
      animationEasing: 'easeOutBounce',
      animateRotate: true,
      responsive: false,
      maintainAspectRatio: false
    };

    let voteDisplay;
    const { rep } = this.props;
    if (rep && rep.votes && rep.roles) {
      const { votes, roles } = rep;

      voteDisplay = votes.map(vote =>
        <VoteDetails
          key={shortid.generate()}
          vote={vote}
        />
      );
    }

    const { lineGraphData } = rep;
    const { doughnutGraphData } = rep;
    return (
      <div>
        <div>Last 100 votes:<br />

          <Doughnut
            data={doughnutGraphData}
            height={200}
            width={400}
            options={doughOptions}
          />
        </div>
        <div>
          <Line
            data={lineGraphData}
            height={200}
            width={400}
            options={lineOptions}
          />
        </div>
        <Accordion>
          <AccordionPanel heading='Last 100 votes' >
            {voteDisplay}
          </AccordionPanel>
        </Accordion>
      </div>
    );
  }
}

repVoteStats.propTypes = {
};
repVoteStats.defaultProps = {
};
export default repVoteStats;
