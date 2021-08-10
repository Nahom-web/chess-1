import React, { useState, Component } from 'react';
import Chess from '../public/js/chess'
import Square from './Square'
import styles from '../styles/Demo.module.css'
import { render } from 'react-dom';

const chess = new Chess();

export default class Board extends Component {

    state = {
        squareSelected: String,
        selected: Array.from(Array(8), () => new Array(8).fill(false)),
        board: chess.Board(),
        uiBoard: new Array(8)
    }

    setAsSelected = (e, selected, row, col) => {
        selected[row][col] = true;
        console.log("attempted.");
        console.table(selected);
        console.log(e);
    }


    setUpBoard = () => {
        for (let row = 0; row < this.state.uiBoard.length; row++) {
            this.state.uiBoard[row] = new Array(8);

            for (let col = 0; col < this.state.uiBoard.length; col++) {
                let piece = this.state.board[row][col];
                let imagePath;

                if (piece !== ' ') {
                    if (piece === piece.toLowerCase()) {
                        imagePath = "/images/black/" + piece;
                    } else {
                        imagePath = "/images/white/" + piece;
                    }
                }

                this.state.uiBoard[row][col] = <
                    Square
                style = {
                    {
                        backgroundColor: this.state.selected[row][col] ? '#E8F0AF' : (row % 2) === (col % 2) ? '#f7fee7' : '#94b584',
                        backgroundImage: piece === ' ' ? 'none' : `url(${imagePath}.svg)`
                    }
                }
                key = { row.toString() + col }
                onClick = {(e)=>this.setAsSelected(e, selected, row, col)}
                />;
            }
        }

    }

    render() {
        let {uiBoard} = this.state;
        return (
            <div className = { styles.center } >
                {this.setUpBoard()}
                <div className = { styles.board } > 
                    { uiBoard } 
                </div> 
                <a href = "http://localhost:3000/" > Go Back </a> 
            </div >        
        )
    }

}
