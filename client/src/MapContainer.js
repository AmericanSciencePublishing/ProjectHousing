import React from 'react';
import {} from 'react-bootstrap';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import Thumbnail from './Thumbnail';
import MapMarker from './MapMarker';

import './css/MapComponent.css';

const convertPrice = (price) => {
	price = price.split(',')
	if (price.length === 2){
		price = price[0] + "k"
	}else if (price.length === 3){
		price = price[0] + "m"
	}else{
	  price = price[0] + "b"
	}
  return price
}

class MapContainer extends React.Component {
	// constructor(props) {
	//   super(props);

	//   this.state = {
	//   	isOpen:false,
	//   	currentHouse: {}
	//   };
	// }

	// handleToggleOpen(isOpen,house){
	// 	this.setState({
	// 		isOpen: true,
	// 		currentHouse : house
	// 	})
	// }

  render() {

  		// const isOpen = this.state.isOpen
  		// const currentHouse = this.state.currentHouse

		const MyMapComponent = withGoogleMap((props) =>
			<GoogleMap
			defaultZoom={8}
			defaultCenter={{ lat: 41.8863, lng: -87.7173 }}
			>
				<MapMarker houseList={this.props.houseList} />

			</GoogleMap>
		)

    const houseList = this.props.houseList || [];

		// console.log('HOUSE_LIST',houseList);

		return (
			<div className="MapContainerOriginal">
				<MyMapComponent
					containerElement={ <div style={{ width: `100%`, height: `100%`}} /> }
          			mapElement={ <div style={{ height: `100%` }} /> }
					houseList={houseList}
				>
				</MyMapComponent>
			</div>
		);
  }
}

export default MapContainer;
