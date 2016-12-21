import React, { Component } from 'react';
import './Game.css';


class Square extends Component {

  constructor(){
    super();
    this.state = {
      value: null,
    };
  }

  render() {
    const turn = true;

    //TODO implement the functionality
    function fillValue(){
      //console.log(turn);
      if (turn){
        this.setState({value: 'X'});
      }else{
        this.setState({value: 'O'});
      }
      //turn = !turn;
    };

    return (
      //<button className="square" onClick={()=> this.setState({value: this.props.value})}>
      //<button className="square" onClick="fillValue();">
      <button className="square" onClick={()=> this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends Component {
  constructor(){
    super();
    this.state = {
      squares: Array(9).fill(null),
    };
  }
  renderSquare(i) {
    //return <Square value={i}/>;
    return <Square value={this.state.squares[i]}/>;
  }
  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends Component {
  sayHello(){
    return (<div>Say Hello</div>);
  };

  render() {
    return (
      //<p>{sayHello }</p>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

// ReactDOM.render(
//   <Game />,
//   document.getElementById('container')
// );

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


class App extends Component {
  render() {
    return (
      <Game />
    );
  }
}


export default App;
