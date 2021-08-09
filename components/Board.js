import React, { useState } from 'react';
import Chess from '../public/js/chess'
import Square from './Square'
import styles from '../styles/Demo.module.css'

const chess = new Chess();

export default function Board() {
    var selected = Array.from(Array(8), () => new Array(8).fill(false));

    console.table(selected);

    var board = chess.Board();
    var uiBoard = new Array(8);

    for (let row = 0; row < uiBoard.length; row++) {
        uiBoard[row] = new Array(8);

        for (let col = 0; col < uiBoard.length; col++) {
            let piece = board[row][col];
            let imagePath;

            if (piece !== ' ') {
                if (piece === piece.toLowerCase()) {
                    imagePath = "/images/black/" + piece;
                }
                else {
                    imagePath = "/images/white/" + piece;
                }
            }

            uiBoard[row][col] = 
                                <Square 
                                    style = {{
                                        backgroundColor: selected[row][col] ? '#E8F0AF' : (row % 2) === (col % 2) ? '#f7fee7' : '#94b584',
                                        backgroundImage: piece === ' ' ? 'none' : `url(${imagePath}.svg)`
                                    }}
                                    key={row.toString() + col}
                                    onClick = {(e) => setAsSelected(e, selected, row, col)}
                                     />;
        }
    }

    return (
        <div className={styles.center}>
            <div className={styles.board}>
                {uiBoard}
            </div>
            <a href="http://localhost:3000/">Go Back</a>
        </div>
    );
}

function setAsSelected(e, selected, row, col) {
    selected[row][col] = true;
    console.log("attempted");
    console.table(selected);
    console.log(e);
}