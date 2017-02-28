import React from 'react';
// import React, { Component } from 'react';

// class repVoteStats extends Component {
const repVoteStats = ({ rep }) => {
  const { roles, votes } = rep;

  // console.log('repVoteStats! rep: ', rep, 'roles: ', roles, 'votes: ', votes);
  if (votes !== undefined) {  // this shouldn't be necessary at production
    const yesNo = votes.reduce((tabs, vote) => {
      console.log(tabs, vote.position);
      tabs[vote.position] = tabs[vote.position] + 1 || 1;
      return tabs;
    }, {});
  }

  return (
    <div>
      repVoteStats: nothing!
    </div>
  );
};

repVoteStats.propTypes = {
};
repVoteStats.defaultProps = {
};
export default repVoteStats;
