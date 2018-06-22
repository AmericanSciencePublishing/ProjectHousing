import React from 'react';
import ReactDOM from 'react-dom';

import './css/MapComponent.css';


export default class Map extends React.Component {
    constructor(props) {
    super(props);


    }
    componentDidMount() {
			console.log('map.js didmount check:',this.props);
			this.loadMap();
    }
    componentDidUpdate(prevProps, prevState) {
			console.log('map.js didupdate check:',this.props.google);
			if (prevProps.google !== this.props.google) {
			  this.loadMap();
			}
    }

    loadMap() {
			if (this.props && this.props.google) {
				// google is available
				const {google} = this.props;
				const maps = google.maps;

				const mapRef = this.refs.map;
				const node = ReactDOM.findDOMNode(mapRef);

				let zoom = 10;
				let lat = 41.878876;
				let lng = -87.635915;
				const center = new maps.LatLng(lat, lng);
				const mapConfig = Object.assign({}, {
					center: center,
					zoom: zoom
				});
				console.log(mapConfig);
				this.map = new maps.Map(node, mapConfig);
			}
    }

    renderChildren() {
			const {children} = this.props;

			if (!children) return;

			return React.Children.map(children, c => {
				if (!c) return;
				return React.cloneElement(c, {
					map: this.map,
					google: this.props.google
				});
		});
    }

    render() {
			return (
			    <div>
			    <div ref='map' >
		              Loading map...
			    </div>
			    {this.renderChildren()}
			    </div>
			);
    }
}
