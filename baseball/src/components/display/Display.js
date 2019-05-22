// display the count of balls and strikes for the at-bat.
// should be updated when the user records activity on the Dashboard component.
import React from "react";

function Display(props) {
  const { balls, strikes } = props;
  return (
    <div className="Display">
      <h2>Display</h2>
      <div className="score-container">
        <h4>Balls: </h4>
        <h4 data-testid="ballCount">{balls}</h4>

        <h4>Strikes: </h4>
        <h4 data-testid="strikesCount">{strikes}</h4>
      </div>
    </div>
  );
}

export default Display;
