import React, { Component } from 'react';
import Letter from './Letter';
import { objectExpression } from '@babel/types';

class Letters extends Component {
  changeToTrue=(w)=>{
    this.props.changeToTrue(w)
  }
  getClassName=(l)=>{
    return this.props.letterStatus[l] ? 'guessed' : 'available'
  }
    render(){
        let allTheAlphabet = Object.keys(this.props.letterStatus)
        let word = this.props.solution.word 

      return (
        <div>
            <div className="avavilableLetter">Available letters:</div>
            <span>{Object.keys(this.props.letterStatus).map(l=><Letter letter={l} selectLetter={this.props.selectLetter} className={this.getClassName(l)}/>)}</span>
            
        </div>
        )
      }
    }    
    
    export default Letters