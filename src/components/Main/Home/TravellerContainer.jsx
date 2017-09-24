import React, { Component } from 'react';
import TravellerCard from '../UserCards/TravellerCard.jsx'

const testData = [{
  username: 'Alexander Xavior',
  rating: 4.5,
  comingFrom: 'Tokyo',
  goingTo: 'Vancouver',
  arriving: '12th December 2017',
  price: '< $20 CAD'
}, {
  username: 'Alexander Xavior',
  rating: 4.5,
  comingFrom: 'Tokyo',
  goingTo: 'Vancouver',
  arriving: '12th December 2017',
  price: '< $20 CAD'
}, {
  username: 'Alexander Xavior',
  rating: 4.5,
  comingFrom: 'Tokyo',
  goingTo: 'Vancouver',
  arriving: '12th December 2017',
  price: '< $20 CAD'
}, {
  username: 'Alexander Xavior',
  rating: 4.5,
  comingFrom: 'Tokyo',
  goingTo: 'Vancouver',
  arriving: '12th December 2017',
  price: '< $20 CAD'
}];

class TravellerContainer extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    const travellerCards = testData.map((traveller, i) => {
      return (
        <div className="tile is-parent">
          <article className="tile is-child box">
            <TravellerCard
            key={i}
            username={traveller.username}
            rating={traveller.rating}
            comingFrom={traveller.comingFrom}
            goingTo={traveller.goingTo}
            arriving={traveller.arriving}
            price={traveller.price}
            />
          </article>
        </div>
      )
    })

    return (
      <div>
        {travellerCards}
      </div>

      // <div style={{ display: 'flex', flexDirection: 'column', width: '1400px', paddingLeft: '3em', paddingTop: '2em', justifyContent: 'space-around' }}>
      //   <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      //     <h2>Traveller</h2>
      //     <a href='#UserFilter'>See All</a>
      //   </div>
      //   <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      //     {travellerCards}
      //   </div>
      // </div>
    );
  }
}

export default TravellerContainer;