import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';
import SearchBarWithConditions from './SearchBarWithConditions';
import Label from './Label';
import Pagination from './Pagination';
import MapContainer from './MapContainer';
import Thumbnail from './Thumbnail';
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
	  <div className="house_list_all">
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
	      <MapContainer/>
           </div>

              <div className="list_on_the_right">
    <p>1111minent judge on the Ninth Circuit Court of Appeals who was accused of harassment, shows that lifetime appointments do not render their holders invincible.

Meanwhile, Thomas’s story keeps intersecting in peculiar ways with the current news cycle. Joe Biden, who led the Senate Judiciary Committee when Thomas was confirmed and seems interested in a third attempt at the presidency in 2020, has been harshly criticized for his handling of the case and has apologized publicly to Hill. Hill herself has been named the head of a post-Weinstein Hollywood anti-harassment push. Ginni Thomas, the justice’s wife, this month bestowed an award for “defense of liberty” on James O’Keefe, the conservative provocateur whose organization was recently caught trying to hoax The Washington Post with fake sexual-harassment allegations.

Hill’s accusations emerged during confirmation hearings for Thomas, who was nominated by President George H.W. Bush, and who seemed to be headed for easy confirmation as the second black justice in Supreme Court history. The Senate Judiciary Committee had completed its work when reports of Hill’s allegations against Thomas emerged. Hill, like Thomas, was an African American graduate of Yale Law School. She first worked for Thomas, eight years her senior, at the Department of Education’s Office of Civil Rights and then at the Equal Employment Opportunity Commission.

She said Thomas had repeatedly asked her out, but she turned him down. He discussed sexual topics, she said, including “acts that he had seen in pornographic films involving such matters as women having sex with animals and films showing group sex or rape scenes. He talked about pornographic materials depicting individuals with large penises or large breasts involved in various sex acts.” She said he’d discussed his own “sexual prowess” and, in the most enduring and bizarre image from the hearings, had once walked up to his desk and then asked her, “Who put pubic hair on my Coke?”

	  The allegations were awful — Ted Koppel called them “grotesquely riveting” — but they were also challenging for anyone watching or listening, as many Americans did. (Long before the golden age of cable news, many outlets carried the hearings live.) For viewers at home, it looked like a typical he-said, she-said sexual-harassment case, in which it was nearly impossible to determine who was in the right. Believing Hill required believing that a federal judge on the verge of Supreme Court confirmation would perjure himself; believing Thomas required believing that Hill would have fabricated vivid allegations out of whole cloth.

	  This appearance of irresolvable conflict was neither wholly accurate nor accidental. Four friends of Hill’s testified that she had told them about the harassment at the time, lending more credibility to the claims. Three other women were willing to testify about being harassed by Thomas, too. But Biden chose not to allow one of them, Angela Wright, to testify publicly, instead releasing a transcript of a phone interview with her. Strange Justice, a 1994 book by reporters Jill Abramson and Jane Mayer, concluded the Judiciary Committee had failed to follow up leads on allegations against Thomas and had conducted only a cursory investigation. Whether such testimony would have been adequate to convict Thomas in a court of law is unclear, but perhaps also beside the point. It was as strong or stronger than the evidence that has toppled several members of Congress, including Senator Al Franken.

	  When apprised of Hill’s accusations, Senator Howard Metzenbaum, the Ohio Democrat, said, “If that’s sexual harassment, half the senators on Capitol Hill could be accused.” With 26 years of perspective, new data on congressional settlements, and testimony from women in politics, it seems Metzenbaum was right, though not for the reasons he believed.

	  ~</p>
             <p>list shows here</p>
             {this.state.houseList.map(house => (
	       <Thumbnail item={house} key={house._id} />
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
