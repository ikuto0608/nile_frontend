import React, { Component } from 'react';

class SearchFilters extends Component {
  constructor() {
    super();
    this.todayDate = this.todayDate.bind(this);
    this.maxDate = this.maxDate.bind(this);
  }

  todayDate () {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();

    if (dd < 10 ) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    dateToday = yyyy + '/' + mm + '/' + dd;
    return dateToday;
  }

  maxDate () {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();
    let nextYear = Number(yyyy) + 1;

    if (dd < 10 ) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    dateToday = nextYear + '/' + mm + '/' + dd;
    return dateToday;
  }

  render() {

    const style = {
      margin: "auto",
      width: "50%",
      textAlign: "center"
    }

    const dateToday = this.todayDate();
    const maxDate = this.maxDate();

    return (
      <form>
        <label for="usertype">I am a:</label>
        <input type="select" name="usertype" id="usertype" value="Customer">
          <option value="traveler">Traveler</option>
          <option value="customer">Customer</option>
        </input>
        <label for="want">Want something from:</label>
        <input type="text" name="want" id="want" value="">
        <label for="delivered">Delivered to:</label>
        <input type="text" name="delivered" id="delivered" value="">
        <label for="deadline">Deadline:</label>
        <input id="deadline" name="deadline" type="date" min={dateToday} max={maxDate}>
        <input type="submit" value="Submit">
      </form>
    )
  }
}

export default SearchFilters;