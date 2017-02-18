import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

class Map extends Component {
  render() {
    return (
      <GoogleMapLoader
        containerElement={<div style={{ height: '100%' }} />}
        googleMapElement={<GoogleMap
          ref={(map) => { console.log(map); }}
          defaultZoom={9}
          defaultCenter={{ lat: 40.7058253, lng: -74.1180872 }}
          defaultDraggable={false}
        />}
      />
    );
  }
}

export default Map;
