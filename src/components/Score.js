import React, { Component } from 'react';
import EndGame from './EndGame';
class Score extends Component {
    getClassName=()=>{
      if(this.props.score >= 80){
        return 'high'
      } else if(this.props.score < 80 && this.props.score >= 50){
        return 'middle'
      } else{
        return 'low'
      }
    }
    startAnewGame=()=>{
      this.props.startAnewGame()
    }
    render(){
       
      return (
        <div>
          <div className={this.getClassName()}> <div className="score">Score: {this.props.score}</div></div>
          <div>
          {this.props.score <=0 ? 
          <div className="gameover">
          <span>You've lost this battle! :(</span>
          <span>Would you like to play another Game?</span>
          <button className="endButton" onClick={this.startAnewGame}>Yes!</button>
        </div> : null
          }
            {/* {this.props.score <= 0 ?  <EndGame lose={'lose'} startAnewGame={this.props.startAnewGame}/> : null} */}
          </div>
        </div>
        )
      }
    }
    export default Score