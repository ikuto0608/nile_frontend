import React, { Component } from 'react';
import SearchFilters from './SearchFilters.jsx'
import SearchList from './SearchList.jsx'
import axios from 'axios'


class SearchContainer extends Component {

  constructor() {
    super();
    this.state = {
      buyersData: [],
      deadline: '3000-01-01'
    }
    this.getResultsForBuyers = this.getResultsForBuyers.bind(this);
    this.getDeadline = this.getDeadline.bind(this);
  }

  componentDidMount(){
    this.getResultsForBuyers();
  }

  getDeadline(deadline) {
    this.setState({deadline: deadline})
  }

  getResultsForBuyers () {
    const source = String(this.props.source);
    const destination = String(this.props.destination);
    const url = `http://10.30.19.253:3000/users/possible_delivers?filter[coming_from]=${source}&filter[going_to]=${destination}`
    axios.get(url)
    .then(result => {
      let newResult = this.state.buyersData.concat(result.data);
      this.setState({buyersData: newResult});
    })
  }

  render() {
    if(this.state.buyersData.length > 0){
      console.log('buyers', this.state.deadline);
    }
    return (
      <div>
      <SearchFilters userType={this.props.userType} source={this.props.source} destination={this.props.destination} getSearchResults={this.props.getSearchResults} getResultsForBuyers={this.getResultsForBuyers} deadline={this.getDeadline} />
      <SearchList handleOrderClick={this.props.handleOrderClick} buyers={this.state.buyersData} goingTo={this.props.destination.toString()} deadline={this.state.deadline} comingFrom={this.props.source.toString()} />
      </div>
    );
  }
}

export default SearchContainer;