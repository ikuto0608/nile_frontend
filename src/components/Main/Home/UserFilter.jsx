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
        <div className="hero home-background is-large">
          <div className="hero-body home-background-fade">
            <div className='columns '>
              <div className="column is-1"></div>
              <div className="column is-8">
                <span className="home-background-header">Connecting Travellers and customers across the world</span>
              </div>
            </div>
            <div className="columns">
              <div className="column is-1"></div>
              <div className="column is-6 ">
                <div className="columns">
                  <form className='customer-form' onSubmit={this.handleSubmit}>
                    <div className="column is-7">
                      <div className="field is-horizontal">
                        <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <select className="select" name='user-type' onChange={this.updateForm}>
                              <option value='customer'>Customer</option>
                              <option value='traveller'>Traveller</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                    <div className="field is-horizontal">
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <input className="input" type="text" placeholder="I want something from" ref={(source) => this.source = source}/>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="field is-horizontal">
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <input className="input" type="text" placeholder="Delivered to" ref={(destination) => this.destination = destination}/>
                          </div>
                        </div>
                      </div>
                    </div>

                      
                    <div className="column is-half">
                      <div>
                        <input className='button' type='submit' value='Search' />
                      </div>
                    </div>
                  </form>
                </div>

              </div> 
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default UserFilter;