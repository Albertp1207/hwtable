import React,{Component} from "react";
import Li from "./Li";

class GameLis extends Component {
    state = {
        games:null,
        statuses:["Busy","Available","Started"],
        options:this.props.options
    }
    componentDidMount() {
        this.requestGames();

    }
    //create array of Lis
    makeGamesLis(key){

        let {games} = this.state;       
        //loadiiiiiing
        if(!games) {
            return <label>Loading ...</label>
        }
        let gamesLis = games.slice();
        if(key) {
            console.log(this.state.options)
            gamesLis = gamesLis.filter(game=>{
                for(let i = 0; i < key.length; i++) {
                    console.log(key[i] + " : " + game.status)
                    if(key[i] === game.status) return true;
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

    //request f
    requestGames(){
        fetch("http://5c76d7692179940014a138c5.mockapi.io/games")
            .then(resp=>resp.json())
            .then(data=>this.setState({games:data}))
            .catch(err=>console.log(err))
    }
    render(){
        let game = this.makeGamesLis(this.state.options)
        return game;
    }
}

export default GameLis;