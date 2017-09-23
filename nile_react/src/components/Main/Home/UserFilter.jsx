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

    let inputFields;

    if (this.state.userType === 'customer') {
      inputFields = (
        <div>
          <div>
            <span>Want Something From </span>
            <input type='text' />
          </div>
          <div>
            <span>Live in </span>
            <input type='text' />
          </div>
        </div>
      )
    } else {
      inputFields = (
        <div>
          <div>
            <span>Coming From </span>
            <input type='text' />
          </div>
          <div>
            <span>Going to </span>
            <input type='text' />
          </div>
          <div>
            <span>Arriving </span>
            <input type='text' />
          </div>
        </div>
      )
    }
    

    console.log(inputFields);

    return (
      <div>
        Connecting Travellers and customers across the world
        <form className='customer-form'>
          <div>
            I am a 
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