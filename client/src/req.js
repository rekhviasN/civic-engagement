import React, { Component } from 'react';
import Request from 'react-http-request';

export default class testReq extends Component {
  render() {
    return (
      <Request
        url="/api/test"
        method='get'
        verbose={true}
      >
        {
          ({error, result, loading}) => {
            if (loading) {
              return <div>loading...</div>;
            } else {
              return <div>{ JSON.stringify(result) }</div>;
            }
          }
        }
      </Request>
    );
  }
}
