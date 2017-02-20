import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

class Map extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      defaultCenter: {
        lat: 49,
        lng: -105
      },
      windowPosition: null,
      showInfoWindow: false,
      current_name: ''
    };
  }
  render() {
    return (
      <section style={{ height: '100%', width: '100%' }}>
        <GoogleMapLoader
          containerElement={
            <div style={{ height: '100%' }} />
          }
          googleMapElement={
            <GoogleMap
              ref={(map) => { console.log(map); }}
              defaultZoom={9}
              defaultCenter={{ lat: 40.7058253, lng: -74.1180872 }}
            >
              <Marker />
              <InfoWindow />
            </GoogleMap>
          }
        />
      </section>
    );
  }
}

export default Map;
