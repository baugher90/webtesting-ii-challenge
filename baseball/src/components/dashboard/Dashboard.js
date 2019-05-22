// provide a button that the person in charge can press every time there is a strike, ball, foul or hit.
// there is NO need to specify the type of hit (single, double, etc).
// changes recorded on this component should update the information shown by the Display component.

import React from "react";

function Dashboard(props) {
  return (
    <div className="Dashboard">
      <h2>Dashboard</h2>
      <button data-testid='strikeBTN' className="ui basic button" onClick={() => props.strike()}>Strike</button>
      &nbsp; | &nbsp;
      <button data-testid='ballBTN' className="ui basic button" onClick={() => props.ball()}>Ball</button>
      &nbsp; | &nbsp;
      <button data-testid='foulBTN' className="ui basic button" onClick={() => props.foul()}>Foul</button>
      &nbsp; | &nbsp;
      <button data-testid='hitBTN' className="ui basic button" onClick={() => props.hit()}>Hit</button>
    </div>
  );
}

export default Dashboard;
