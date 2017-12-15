import React from 'react';
import {} from 'react-bootstrap';
import {GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div>Map will go here</div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDVfVbaJ2245-ftBYAFMXHFTSCiInqI61k'
})(MapContainer)
