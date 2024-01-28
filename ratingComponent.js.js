import React, { useState } from 'react';

class StarRating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      totalRatings: 0,
      totalScore: 0,
      averageRating: null
    };
  }
  handleStarSubmit = (value) =>{
this.setState((prevState) => ( {
  totalScore: prevState.totalScore + value,
  totalRatings: prevState.totalRatings + 1,
  setRating: 0

}))

}


  handleStarClick = (value) => {
    // Update total score and total ratings
    this.setState((prevState) => ({
      rating: value,

    }));
  };

  render() {
    const { rating, totalRatings, totalScore } = this.state;
    const averageRating = totalRatings === 0 ? 0 : totalScore / totalRatings;

    return (
      <div>
        <div>
       
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              onClick={() => this.handleStarClick(value)}
              style={{
                cursor: 'pointer',
                fontSize: '24px',
                color: value <= rating ? 'gold' : 'lightgray',
              }}
            >
              ★
            </span>
          ))}

          <button className="btn btn-primary"  onClick={this.handleStarSubmit}>Submit</button>
        </div>

        <div>
          <p>Average Rating: {averageRating.toFixed(1)}</p>
          <p>Total Ratings: {totalRatings}</p>
        </div>
      </div>
    );
  }
}

export default StarRating;
