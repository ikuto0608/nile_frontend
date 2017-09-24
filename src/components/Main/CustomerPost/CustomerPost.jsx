import React, { Component } from 'react';
import Overlay from './Overlay.jsx';
import Iframe from 'react-iframe'


const testData = {
  userName: 'Matt Willcox',
  wantFrom: 'Japan',
  deliverTo: 'Vancouver',
  deliverBy: '12th December 2017',
  product: 'Adidas Yeezy 350 Boost',
  message: 'The retail price for the shoe is $200 for the original and $220 for the V2. ',
  avatar: 'http://fillmurray.com/200/200'
}

class CustomerPost extends Component {

  constructor() {
    super();
    this.state = {
      visible: false
    }
    this.showOverlay = this.showOverlay.bind(this);
  }

  showOverlay(e) {
    this.setState({visible: !this.state.visible})
    e.preventDefault();
  }

  render() {
    const visibility = this.state.visible ? 'visible' : 'hidden';
    const {userName, wantFrom, deliverTo, deliverBy, product, message, avatar} = testData;

    return (
      <div>
      <Overlay visibility={visibility} showOverlay={this.showOverlay} />
      <div className='container' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', paddingLeft: '2em'}}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingRight: '2em'}}>
            <div>
              <img src={avatar} alt='fillmurray' />
            </div>
            <div>
              <button className='button' onClick={this.showOverlay} style={{borderRadius: '10%', margin: '1em'}}>Offer Delivery</button>
            </div>
          </div>
        <div className='content' style={{ display: 'flex', flexDirection: 'column'}}>
          <div>
            <div>
              <span>{userName}</span>
            </div>
            <div style= {{display: 'flex', flexDirection: 'row' }}>
              <div style={{paddingRight: '2em'}}>
                <p>Want something from: </p>
                <p>Deliver to: </p>
                <p>Delivered by: </p>
                <p>Product: </p>
                <p>Message: </p>
                
              </div>
              <div>
                <p>{wantFrom}</p>
                <p>{deliverTo} </p>
                <p>{deliverBy}</p>
                <p>{product}</p>
                <p>{message}</p>
                
              </div>
            </div>
          </div>
          <div style= {{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ paddingRight: '2em' }}>
            </div>
            <div style={{display: 'flex', width: '20em', flexWrap: 'wrap'}}>
            </div>
          </div>
          <div>  
            <Iframe url="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d52494819.207226716!2d152.40164407209093!3d36.57750710214443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e4!4m5!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C+British+Columbia!3m2!1d49.2827291!2d-123.12073749999999!4m5!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C+Japan!3m2!1d35.6894875!2d139.6917064!5e0!3m2!1sen!2sca!4v1506231158803" 
            width="600" 
            height="450" 
            frameborder="0" 
            style="border:0" 
            allowfullscreen/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default CustomerPost;