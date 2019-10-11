import React, { Component } from 'react';
import './App.css';
import Score from './components/Score';
import Solution from './components/Solution';
import  Letters from './components/Letters';
import Pic from './picture.jpg';
import Letter from './components/Letter';
import EndGame from './components/EndGame'
import { thisTypeAnnotation, throwStatement } from '@babel/types';

const kindOfGame = [
  { word: {L: true,O: true,V: true, E:true}, hint: `"___ is a losing game" once said Amy Winhouse ` },
  { word: {F: true, I:true, S: true,H:  true}, hint: `Under the sea! ` },
  { word: {J: true,A: true,I:true, L: true}, hint: `Be a good person and dont go to the...` },
  { word: {C: true,A: true,K: true,E: true}, hint: `Everybody loves this kind of food in a special day` }
]

class App extends Component {
  constructor(){
    super()
    this.state={
      letterStatus: this.generateLetterStatuses(),
      solution: kindOfGame[0],
      score: 100,
      endGame: false,
      index: 0
    }
  }
  generateLetterStatuses=()=> {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
       letterStatus[String.fromCharCode(i)] = false

    }
    return letterStatus
  }
  selectLetter=(letter)=>{

    if(this.state.solution.word[letter] ){
      let letterStatus = {...this.state.letterStatus}
      letterStatus[letter]= true

      this.setState({letterStatus, score: this.state.score + 5,}, function(){
      console.log(this.state)
      })
    }
    else{

      this.setState({score: this.state.score - 20}, function(){
        // console.log(this.state)
      })
    }
  }
    startAnewGame=()=>{
      this.setState({
        index: this.state.index + 1,
        solution: kindOfGame[this.state.index + 1],
        letterStatus: this.generateLetterStatuses()},function(){
          // console.log(this.state)
        } )
    }
render(){
  let lettersValues = Object.values(this.state.letterStatus)
  let counter = 0 
  for(let value of lettersValues){
    if(value === true){
      counter ++
      // console.log(counter)
    } 
  }
  return (
    <div>
      {/* {console.log(this.state.solution.word)} */}
      <div className="header">Hangman</div>
      {counter > 3 ? <EndGame score={this.state.score} startAnewGame={this.startAnewGame} won={'won'}/> : null}
      {console.log(this.state.letterStatus)}
        <Score  selectLetter={this.selectLetter} score={this.state.score} startAnewGame={this.startAnewGame}/>
        <Solution letterStatus={this.state.letterStatus} solution={this.state.solution}/>
        <Letters selectLetter={this.selectLetter} letterStatus={this.state.letterStatus} solution={this.state.solution}/>
        <Letter  selectLetter={this.selectLetter} selectLetter={this.selectLetter}/>
        <img src={Pic} alt="Logo" className="pic" />
        <div>
        
        </div>
    </div>
    )
  }
}
export default App
