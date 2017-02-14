import React, { Component } from 'react';
import Request from 'react-http-request';
import { Link } from 'react-router';

export default class testReq extends Component {
  render() {
    return (
      <Request
        url="/api/test"
        method='get'
        verbose={true}
      >
        {
          ({ error, result, loading }) => {
            if (loading) {
              return <div>loading...</div>;
            } else {
              return <div><div>Data: { result.body.data }</div>
              <div><Link to="/">Home</Link></div></div>
            }
          }
        }
      </Request>
    );
  }
}
