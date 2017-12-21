import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';
import SearchBarWithConditions from './SearchBarWithConditions';
import HouseListItem from './HouseListItem';
import Label from './Label';
import Pagination from './Pagination';

import './HouseList.css';

class HouseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { labels: [], houseList: [] };
    this.fetchHouseList = this.fetchHouseList.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const city = query.get('city');
    this.fetchHouseList(city);

    this.setState({ labels: this.props.labels });
  }

  fetchHouseList(city) {
    axios
      .get(`/search?city=${city}`)
      .then(res => res.data)
      .then(houseList => this.setState({ houseList: houseList }));
  }

  handleSearch(queryString) {
    const city = queryString;

    this.props.history.push(`/house-list?city=${city}`);
    this.fetchHouseList(city);
  }

  render() {
      const labels = this.state.labels || [];
      
      return (
	  <div>
	    <div className="house-list">
              <SearchBarWithConditions handleSearch={this.handleSearch} />
	      <div className="list-header container">
		<span style={{ margin: 'auto 0' }}>
		  {labels.map(label => (
		      <Label key={label} title={label} withHandle />
		  ))}
          </span>
	      
              <span>
                <div>
                  Sort By &nbsp;
                  <DropdownButton title="Relevant" id="sort_by_button">
                    <MenuItem eventKey="Relevant">Relevant</MenuItem>
                    <MenuItem eventKey="Newest">Newest</MenuItem>
                    <MenuItem eventKey="Lowest_Price">Lowest Price</MenuItem>
                    <MenuItem eventKey="Highest_Price">Highest Price</MenuItem>
                    <MenuItem eventKey="Largest">Largest</MenuItem>
                    <MenuItem eventKey="Price_Reduced">Price Reduced</MenuItem>
                  </DropdownButton>
                </div>
              </span>
            </div>
         </div>

	  
         <div className="map_and_list">
           <div className="map_on_the_left">
           </div>

           <div className="list_on_the_right">
             <p>list shows here</p>
             {this.state.houseList.map(house => (
	       <HouseListItem item={house} key={house._id} />
             ))}  
          {this.state.houseList.length > 0 ? <Pagination /> : null}
	  <Footer />
           </div>

         </div>


</div>
    );
  }
}

export default withRouter(HouseList);
