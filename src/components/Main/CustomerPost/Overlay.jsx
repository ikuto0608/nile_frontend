import React, { Component } from 'react';

class Overlay extends Component {

  render() {

    return (
<div className="box" style={{ backgroundColor: 'white', zIndex: 100, position: 'fixed', visibility: this.props.visibility }}>
  <div style={{textAlign: 'right'}}>
    <button onClick={this.props.showOverlay}>X</button>
  </div>
  <div className="content">
    <p>
      <h2>Request Delivery</h2>
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
    </p>
  </div>
   <form className="login-form" onSubmit={this.props.showOverlay}>

      <div className="field">
        <p className="control has-icons-left has-icons-right">
        <label>Product</label>
          <input className='input' type="text" placeholder="Computer"/>
        </p>
      </div>

      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <label>Shipping Price Offer</label>
          <input className='input' type="text" placeholder="CAD $40"/>
        </p>
      </div>

      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <label>Shipping Price Offer</label>
          <input className='input' type="textarea" placeholder="Hi, I am traveling and can pick up your item!"/>
        </p>
      </div>

      <div className="field is-grouped is-grouped-centered">
        <p className="control">
          <input className="button is-primary" type="submit" value="Submit" />
        </p>
      </div>
    </form>
</div>

)
  }
}

export default Overlay;