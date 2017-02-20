import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import sampleData from '../reference/markerDummyData';

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
  // componentWillMount() {
  //   this.context.store.subscribe(() => {
  //     const state = this.context.store.getState();
  //     this.setState({
  //       windowPosition: state.position,
  //       showInfoWindow: state.showInfoWindow,
  //       current_name: state.key
  //     });
  //   });
  // }
  toggleInfoWindow(name, loc) {
    if (loc === null) {
      this.setState({ windowPosition: null });
      return;
    }
    const markerLoc = {
      lat: loc.latLng.lat(),
      lng: loc.latLng.lng()
    };
    this.setState({
      current_name: name,
      windowPosition: markerLoc,
      showInfoWindow: true
    });
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
              {sampleData.map(marker =>
              (
                <Marker
                  position={{ lat: marker.lat, lng: marker.lng }}
                  key={marker.id}
                />
              ))}
            </GoogleMap>
          }
        />
      </section>
    );
  }
}

export default Map;
