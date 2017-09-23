import React, { Component } from 'react';
import SearchFilters from './SearchFilters.jsx'


class SearchContainer extends Component {
  render() {
    return (
      < SearchFilters userType={this.props.userType} />
    );
  }
}

export default SearchContainer;