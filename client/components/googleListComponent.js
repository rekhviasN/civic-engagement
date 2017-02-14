import React, { Component } from 'react';
import ListView from './ListView';

export default class GoogleList extends Component {
  render() {
    let GoogleResultsOffices = this.props.GoogleResults.offices || [];
    let GoogleResultsOfficials = this.props.GoogleResults.officials || [];

    let GoogleResults = GoogleResultsOffices.map((Office, index) => {
      let key = Office._id || index;
      let profile = GoogleResultsOfficials[Office.officialIndices[0]];
      let title = Office.name;
      let name = profile.name;
      let party = profile.party;
      let phoneNum = profile.phones[0];

      return (<ListView key={key} title={title} name={name} party={party} phone={phoneNum} />);
    });

    return (
      <div className="GoogleList">
        {GoogleResults}
      </div>
    );
  }
}
