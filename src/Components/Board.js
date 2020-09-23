import React, {Component} from 'react'
import Square from './Square'
import {calculateWinner} from '../Helpers/Functions';

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            lastMove: ''
        };
    }

    handleClick(i) {

        const squares = this
            .state
            .squares
            .slice();
        let lastMove = this.state.lastMove;

        let [winner,
            winnerLine] = calculateWinner(squares);
        if (squares[i] || winner) {
            return;
        }

        lastMove = lastMove !== 'X'
            ? 'X'
            : 'O';
        squares[i] = lastMove;
        this.setState({squares: squares, lastMove: lastMove});

    }

    renderSquare(i) {
        let line = [];
        let [winner,
            winnerLine] = calculateWinner(this.state.squares);
        if (winner) {
            line = winnerLine;
        }
        let winClass = line.indexOf(i) >= 0
            ? 'win'
            : '';
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
            className={winClass}/>
    }

    render() {
        return (
            <div className='board'>
                 <div className='row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                 <div className='row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}
