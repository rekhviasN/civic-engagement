import React, { Component } from 'react';
import ListView from './ListView';

export default class GoogleList extends Component {
  render() {
    const GoogleResultsOffices = this.props.GoogleResults.offices || [];
    const GoogleResultsOfficials = this.props.GoogleResults.officials || [];

    const GoogleResults = GoogleResultsOffices.map((Office, index) => {
      const key = Office._id || index;
      const profile = GoogleResultsOfficials[Office.officialIndices[0]];
      const title = Office.name;
      const name = profile.name;
      const party = profile.party;
      const phoneNum = profile.phones[0];

      return (<ListView key={key} title={title} name={name} party={party} phone={phoneNum} />);
    });

    return (
      <div className="GoogleList">
        {GoogleResults}
      </div>
    );
  }
}
