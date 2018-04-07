import React from 'react';
import {} from 'react-bootstrap';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import Thumbnail from './Thumbnail';
import './MapComponent.css';

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

  render() {
		const MyMapComponent = withGoogleMap((props) =>
			<GoogleMap
			defaultZoom={8}
			defaultCenter={{ lat: 41.8863, lng: -87.7173 }}
			>
			{this.props.houseList.map(house => {console.log(house.pos);
				return <Marker label={convertPrice(house.price)} position={house.pos} key={house._id} />})}
			</GoogleMap>
		)

		const houseList = this.props.houseList || [];

		console.log('HOUSE_LIST',houseList);
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
