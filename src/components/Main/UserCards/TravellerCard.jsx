import React, { Component } from 'react';

class TravellerCard extends Component {

  render() {
    const { username, rating, comingFrom, goingTo, arriving} = this.props;
    return (
      <article className="media">
        <figure className="media-left">
          <p className="image is-128x128">
            <img src="http://fillmurray.com/200/200" />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>Alexander Xavier</strong>
              <br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
         
        </div>
      </article>
      // <div style={{width: '40em', height: '15em', borderStyle: 'solid', marginBottom: '4em', padding: '1em'}}>
      //  <p>Username: {username}</p>
      //  <p>Rating: {rating}</p>
      //  <p>Coming from: {comingFrom}</p>
      //  <p>Going to: {goingTo}</p>
      //  <p>Arriving: {arriving}</p>
      //  <p>Price: {price}</p>
      // </div>
    );
  }
}

export default TravellerCard;