import React from 'react';
import {Marker, InfoWindow } from 'react-google-maps';
import Thumbnail from './Thumbnail';

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

export default class MapMarker extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen:false,
			currentHouse: {}
		};
	}

	handleToggleOpen(isOpen,house){
		this.setState({
			isOpen: isOpen,
			currentHouse : house
		})
	}
	handleToggleClose(isOpen){
		this.setState({
			isOpen: isOpen,
			currentHouse : {}
		})
	}

	render() {
		const houseList = this.props.houseList

		const isOpen = this.state.isOpen
		const currentHouse = this.state.currentHouse

		return (
			<div>
				{houseList.map(house => {
					return <Marker onClick={() => this.handleToggleOpen(true,house)} label={convertPrice(house.price)} position={house.pos} key={house._id}/>
				})}
				{isOpen && <InfoWindow onCloseClick={() => this.handleToggleClose(false)} position={currentHouse.pos}>
				<Thumbnail house={currentHouse} key={currentHouse._id} />
			</InfoWindow>}
		</div>
		)
	}
}
