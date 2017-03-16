import React from 'react';
import Header from '../containers/headerContainer';
import ResultsComp from './reqContainer';

class SidebarContainer extends React.Component {

  render() {
    return (
      <div>
          <Header />
          <ResultsComp />
      </div>
    );
  }
}

export default SidebarContainer;
