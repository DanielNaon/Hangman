import React, { Component } from 'react';
class Letter extends Component {
  selectLetter=()=>{
    this.props.selectLetter(this.props.letter)
  }
    render(){
      return (
        <span>
          <span onClick={this.selectLetter} className={this.props.className} >{this.props.letter}</span>
          
        </span>
        )
      }
    }
    export default Letter