import React from 'react';
import {} from 'react-bootstrap';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import './MapComponent.css';
import Marker from './MapMarker';
//import Map from './Map';

export class MapContainer extends React.Component {
    render() {
	if (!this.props.loaded) {
	    return <div>Loading...</div>
	}
	const houseList = this.props.houseList || [];
	return (
	    <div className="MapContainerOriginal">
	      <Map
		google={this.props.google}
		zoom={10}
		initialCenter={{
		    lat: 41.8863,
		    lng: -87.7173
		}}
		>
		{houseList.map(house => <Marker position={house.pos} key={house._id} />)}
	      </Map>
	    </div>
	);
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDVfVbaJ2245-ftBYAFMXHFTSCiInqI61k'
})(MapContainer);
