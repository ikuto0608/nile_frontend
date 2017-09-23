import React, { Component } from 'react';

class UserFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: 'customer'
    }
    this.updateForm = this.updateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateForm(event) {
    const userType = event.target.value;
    this.setState({userType: userType});
    event.preventDefault();
  }

  handleSubmit(event) {
    const source = this.source.value;
    const destination = this.destination.value;

    this.props.getSearchResults(this.state.userType, source, destination);
    event.preventDefault();
  }


  render() {

    let inputFields;

    if (this.state.userType === 'customer') {
      inputFields = (
        <div>
          <div>
            <span>Want Something From </span>
            <input type='text' ref={(source) => this.source = source} />
          </div>
          <div>
            <span>Delivered to </span>
            <input type='text' ref={(destination) => this.destination = destination} />
          </div>
        </div>
      )
    } else {
      inputFields = (
        <div>
          <div>
            <span>Travelling From </span>
            <input type='text' ref={(source) => this.source = source} />
          </div>
          <div>
            <span>Going to </span>
            <input type='text' ref={(destination) => this.destination = destination} />
          </div>
        </div>
      )
    }

    return (
      <div>
        <span>Connecting Travellers and customers across the world</span>
        <form className='customer-form' onSubmit={this.handleSubmit}>
          <div>
            <span>I am a </span>
            <select name='user-type' onChange={this.updateForm}>
              <option value='customer'>Customer</option>
              <option value='traveller'>Traveller</option>
            </select>
          </div>
          {inputFields}
          <div>
            <input type='submit' value='Search' />
          </div>
        </form>
      </div>
    );

  }
}

export default UserFilter;