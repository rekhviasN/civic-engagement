import React, { Component } from 'react';
import LocationBar from '../components/locationBar';
import RepDisplay from '../components/repDisplay';
import Header from '../containers/headerContainer';


const CongressMembersContainer = (props) => {
  return (
    <div>
      <Header />
      <RepDisplay />
    </div>
  );
};

export default CongressMembersContainer;
