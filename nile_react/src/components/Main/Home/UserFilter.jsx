import React, { Component } from 'react';

class UserFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: 'customer'
    }
    this.updateForm = this.updateForm.bind(this);
  }

  updateForm(event) {
    const userType = event.target.value;
    this.setState({userType: userType});
    event.preventDefault();
  }


  render() {

    const inputFields = () => {
      if (this.state.userType === 'customer') {
        return (
          <div>
            <div>
              <span>Want Something From </span>
              <input type='text'>
            </div>
            <div>
              <span>Live in </span>
              <input type='text'>
            </div>
          </div>
        )
      } else {
        return (
          <div>
            <div>
              <span>Coming From </span>
              <input type='text'>
            </div>
            <div>
              <span>Going to </span>
              <input type='text'>
            </div>
            <div>
              <span>Arriving </span>
              <input type='text'>
            </div>
          </div>
        )
      }
    }

    return (
      <div>
        Connecting Travellers and customers across the world
        <form className='customer-form'>
          <div>
            I am a 
            <select name='user-type' onChange={this.updateForm}>
              <option value='traveller'>Traveller</option>
              <option value='customer'>Customer</option>
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