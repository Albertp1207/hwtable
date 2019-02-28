import React,{Component} from "react";

export default function(props){
    let {gameNumber,status,player1,player2,round,amount,time,action} = props;
    return (
        <li>
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
}


