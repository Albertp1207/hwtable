import React,{Component} from "react";
import Li from "./Li";

class GameLis extends Component {
    state = {
        games:null,
        options:["Busy", "Available", "Started"],
    }
    // opts = []// option poxeluc pahvi stex, reload aneluc state-um dni vor menak et jamanak update lini
    componentDidMount() {
        this.requestGames();
    }
    // reload = ()=>{
    //     this.setState({options:this.opts})
    // }
    //create array of Lis
    makeGamesLis(){

        let {games,options} = this.state;       
        //loadiiiiiing
        if(!games) {
            return <label>Loading ...</label>
        }
        let gamesLis = games.slice();
        if(options.length>0) {
            console.log(this.state.options)
            gamesLis = gamesLis.filter(game=>{
                for(let i = 0; i < options.length; i++) {
                    console.log(options[i] + " : " + game.status)
                    if(options[i] === game.status) return true;
                }
                return false;
            })
        }
        gamesLis = gamesLis.map(game=>{
            let {gameNumber,status,player1,player2,round,amount,time,action} = game;

            return (
                <li key={gameNumber}>
                    <label>{gameNumber}</label>
                    <label>{status}</label>
                    <label>{player1}</label>
                    <label>{player2}</label>
                    <label>{round}</label>
                    <label>{amount}</label>
                    <label>{time}</label>
                    <label>{action}</label>
                </li>
            )
        })
        return gamesLis;
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
        this.opts  = newOptions;
        this.setState({options:newOptions})
        console.log(newOptions)
      }
    
    //request f
    requestGames(){
        fetch("http://5c76d7692179940014a138c5.mockapi.io/games")
            .then(resp=>resp.json())
            .then(data=>this.setState({games:data}))
            .catch(err=>console.log(err))
    }
    render(){
        return (
        <div>
            {this.makeGamesLis()}
            <div onClick={this.changeOptions} id="options">
                <input checked type="checkbox" id = "Busy" name = "Busy" value = "Busy"  /><label htmlFor="Busy">Busy</label>
                <input checked type="checkbox" id = "Available" name = "Available" value = "Available"  /><label htmlFor="Available">Available</label>
                <input checked type="checkbox" id = "Started" name = "Started" value = "Started"  /><label htmlFor="Started">Started</label>
                <button onClick={this.reload}>Reload</button>
            </div>
        </div>
        )
    }
}

export default GameLis;