import React, { Component } from 'react';
import TravellerCard from '../UserCards/TravellerCard.jsx';

class SearchList extends Component {

  componentDidMount(){

  }

  render() {

    const buyersList = this.props.buyers.filter((buyer) => {
      let deadline = new Date(this.props.deadline);
      let date_test = new Date(buyer.user_locations[0].end_time)
      return date_test <= deadline }).map((buyer, i) => {
      var date_test = new Date(buyer.user_locations[0].end_time)
      var formatted_date = (Number(date_test.getMonth()) + 1) + '/' + date_test.getDate() + '/' + date_test.getFullYear();
      return (
          <TravellerCard
            key={i}
            username={buyer.full_name}
            comingFrom={this.props.comingFrom}
            goingTo={this.props.goingTo}
            arriving={formatted_date}
            rating={'3.5'}
            handleOrderClick={this.props.handleOrderClick}
          />
        )
    })

    return (
      <div>
        {buyersList}
      </div>
    );
  }
}

export default SearchList;

//const { username, rating, comingFrom, goingTo, arriving} = this.props;