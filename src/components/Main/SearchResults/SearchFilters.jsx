import React, { Component } from 'react';

class SearchFilters extends Component {
  constructor() {
    super();
    this.todayDate = this.todayDate.bind(this);
    this.maxDate = this.maxDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    let dateToday = yyyy + '/' + mm + '/' + dd;
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

    let dateToday = nextYear + '/' + mm + '/' + dd;
    return dateToday;
  }

  handleSubmit(event) {
    const source = this.source.value;
    const destination = this.destination.value;
    const deadline = this.deadline.value;
    this.props.getResultsForBuyers();
    this.props.deadline(deadline);
    this.props.getSearchResults(this.props.userType, source, destination);
    event.preventDefault();
  }

  render() {

    const style = {
      margin: "auto",
      width: "50%",
      textAlign: "center"
    }

    let inputFields;
    const dateToday = this.todayDate();
    const maxDate = this.maxDate();

    if (this.props.userType === 'customer') {
      inputFields = (
        <div>
          <label for="usertype">I am a:</label>
          <select name="usertype" id="usertype" defaultValue={this.props.userType}>
            <option value="traveller">Traveller</option>
            <option value="customer">Customer</option>
          </select>
          <label for="want">Want something from:</label>
          <input type="text" name="want" id="want" defaultValue={this.props.source} ref={(source) => this.source = source} />
          <label for="delivered">Delivered to:</label>
          <input type="text" name="delivered" id="delivered" defaultValue={this.props.destination} ref={(destination) => this.destination = destination} />
          <label for="deadline">Deadline:</label>
          <input id="deadline" name="deadline" type="date" min={dateToday} max={maxDate} ref={(deadline) => this.deadline = deadline }/>
        </div>
      )
    } else {
      inputFields = (
        <div>
          <label for="usertype">I am a:</label>
          <select name="usertype" id="usertype" defaultValue={this.props.userType}>
            <option value="traveller">Traveller</option>
            <option value="customer">Customer</option>
          </select>
          <label for="want">Coming from:</label>
          <input type="text" name="want" id="want" defaultValue={this.props.source} ref={(source) => this.source = source} />
          <label for="delivered">Going to:</label>
          <input type="text" name="delivered" id="delivered" defaultValue={this.props.destination} ref={(destination) => this.destination = destination} />
          <label for="deadline">Arriving:</label>
          <input id="deadline" name="deadline" type="date" min={dateToday} max={maxDate} ref={(deadline) => this.deadline = deadline } />
        </div>
      )
    }

    return (
      <form onSubmit={this.handleSubmit}>
        {inputFields}
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default SearchFilters;