import React, { Component } from 'react';
import Letter from './Letter';

class Solution extends Component {
    render(){
    
        let letter = Object.keys(this.props.solution.word)
      return (
      <div >
        <div className="solution">
          {letter.map(i=><Letter letter={this.props.letterStatus[i] ? i : '_ '}/>)}
        </div>
        <div className="hint">{this.props.solution.hint}</div>
        </div>
        )
      }
    }
    export default Solution