import React, { Component } from 'react';
import './Game.css';


// class Square extends Component {
//
//   // constructor(){
//   //   super();
//   //   this.state = {
//   //     value: null,
//   //   };
//   // }
//
//   render() {
//     const turn = true;
//
//     //TODO implement the functionality
//     function fillValue(){
//       //console.log(turn);
//       if (turn){
//         this.setState({value: 'X'});
//       }else{
//         this.setState({value: 'O'});
//       }
//       //turn = !turn;
//     };
//
//     return (
//       //<button className="square" onClick={()=> this.setState({value: this.props.value})}>
//       //<button className="square" onClick="fillValue();">
//       //<button className="square" onClick={()=> this.setState({value: this.props.test_i})}>
//       //<button className="square" onClick={()=> this.setState({value: 'X'})}>
//       <button className="square" onClick={() => this.props.onClick()}>
//         {this.props.value}
//
//       </button>
//     );
//   }
// }

function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

class Board extends Component {
  constructor(){
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      status: 'X',
    };
  }

  handleClick(i){
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]){
      return ;
    }
    const nextPlayer = this.state.xIsNext? 'O' : 'X';
    squares[i] = this.state.xIsNext? 'X' : 'O';
    //Sets the value in the state.
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      status: nextPlayer,
    });
  }

  renderSquare(i) {
    //return <Square value={i}/>;
    //return <Square value={this.state.squares[i]}/>;
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner){
      status = 'Winner: ' + winner;
    }else{
      status = 'Next player: ' + this.state.status;
    }
    status += " Moves: "+ calculateMoves(this.state.squares);
    //const status = 'Next player: ' + this.state.status;
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

function calculateMoves(squares){
  let count = 0;
  for (let i=0; i<squares.length; i++){
    if (squares[i]){
      count += 1;
    }
  }
  return count;
}


class App extends Component {
  render() {
    return (
      <Game />
    );
  }
}


export default App;
