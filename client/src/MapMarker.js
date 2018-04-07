import React from 'react';
import PropTypes from 'prop-types';

export default class MapMarker extends React.Component {
    render() {
			return null;
    }
    
    componentWillUpdate(prevProps){
			console.log('marker onmount');
    }
    
    componentDidUpdate(prevProps) {
    	console.log('marker onmount');
	// component updated
			if ((this.props.map !== prevProps.map) ||
			    (this.props.position !== prevProps.position)) {
		            // The relevant props have changed
			    this.renderMarker();
			}
    }
    renderMarker() {
			let {map, google, position} = this.props;
			
			let pos = position;
			position = new google.maps.LatLng(pos.lat, pos.lng);
			
			const pref = {
				map: map,
				position: position
			};
			this.marker = new google.maps.Marker(pref);
    }
}

MapMarker.propTypes = {
    position: PropTypes.object,
    map: PropTypes.object
};

