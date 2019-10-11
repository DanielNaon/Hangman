import React, { Component } from 'react';
class EndGame extends Component {
  startAnewGame=()=>{
    this.props.startAnewGame()
  }

    render(){
      let winOrLose = this.props.won === 'won' ? "YOU WON. CONGRATS! :)" :"You've lost this battle! :("
      return (
      <div className="gameover">
        <span>{winOrLose}</span>
        <span>Would you like to play another Game?</span>
        <button className="endButton" onClick={this.startAnewGame}>Yes!</button>
      </div>
        )
      }
    }
    export default EndGame