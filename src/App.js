//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  const [homeValue, setHomeValue] = useState(0);
  const [awayValue, setAwayValue] = useState(0);

  const homeTouchdown = () => {
    setHomeValue(homeValue + 7);
  }

  const homeFieldgoal = () => {
    setHomeValue(homeValue + 3);
  }

  const awayTouchdown = () => {
    setAwayValue(awayValue + 7);
  }

  const awayFieldgoal = () => {
    setAwayValue(awayValue + 3);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Spartans</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeValue}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Wolverines</h2>
            <div className="away__score">{awayValue}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {homeTouchdown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {homeFieldgoal}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {awayTouchdown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {awayFieldgoal}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
