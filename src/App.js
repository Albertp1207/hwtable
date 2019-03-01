import React, { Component } from 'react';
import GameLis from "./components/GameLis"
class App extends Component {

  render() {
    return (
      <div id="table">
        <ul>
          <li id="tableHead">
            <label>Game Number</label>
            <label>Status</label>
            <label>Player 1</label>
            <label>Player 2</label>
            <label>Round</label>
            <label>Amount</label>
            <label>Time</label>
            <label>Action</label>
          </li>         
          <GameLis /> 
        </ul>
        
      </div>
    );
  }
}

export default App;
