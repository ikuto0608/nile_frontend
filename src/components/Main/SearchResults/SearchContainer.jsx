import React, { Component } from 'react';
import SearchFilters from './SearchFilters.jsx'


class SearchContainer extends Component {
  render() {
    return (
      < SearchFilters userType={this.props.userType} source={this.props.source} destination={this.props.destination} getSearchResults={this.props.getSearchResults} />
    );
  }
}

export default SearchContainer;