import React, { Component } from 'react';
import GameLis from "./components/GameLis"
class App extends Component {
  state = {
    options:[]
  }
  changeOptions = (ev)=>{
    if(ev.target.tagName != "INPUT") return
    let {options} = this.state;
    // copy object from state...!?
    let newOptions = options.slice();
    let value = ev.target.value;
    let ind = newOptions.indexOf(value);
    if(ind === -1) {
      newOptions.push(value)
    } else {
      newOptions.splice(ind,1) 
    }
    this.setState({options:newOptions})
    console.log(newOptions)
  }
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
          <GameLis options={this.state.options} /> 
        </ul>
        <div onClick={this.changeOptions} id="options">
          <input type="checkbox" id = "Busy" name = "Busy" value = "Busy" /><label htmlFor="Busy">Busy</label>
          <input type="checkbox" id = "Available" name = "Available" value = "Available" /><label htmlFor="Available">Available</label>
          <input type="checkbox" id = "Started" name = "Started" value = "Started" /><label htmlFor="Started">Started</label>
          <button onClick={this.reload}>Reload</button>
        </div>
      </div>
    );
  }
}

export default App;

// options poxeluc amen angam GameLIs update-a linum zapros tazaya arvum ? tragrum 1 angam...