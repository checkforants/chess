import React from 'react';
import cl from './Row.module.scss';

import Square from '../Square/Square';
const Row = ({promotionFigure, setPromotionFigure, promotion, setPromotion, enPassant, setEnPassant, movesNamesHistory, setMovesNamesHistory, movesHistory, setMovesHistory, colorNow, setColorNow, squareClicked, setSqureClicked, figurePositions, setFigurePositions, number,even, name, reversed,possibleMoves, setPossibleMoves,...props}) => {
	
	const squares = ['A','B','C','D','E','F', 'G', 'H']
	
	
	const clName=[cl.row]
	if (reversed){
		clName.push(cl.reversed)
	}
	return (
		<div className={clName.join(' ')}>
			{squares.map((square, ind)=>{
				return <Square promotionFigure={promotionFigure} setPromotionFigure={setPromotionFigure} promotion={promotion} setPromotion={setPromotion} enPassant={enPassant} setEnPassant={setEnPassant} movesNamesHistory={movesNamesHistory} setMovesNamesHistory={setMovesNamesHistory} movesHistory={movesHistory} setMovesHistory={setMovesHistory} colorNow={colorNow} setColorNow={setColorNow} squareClicked={squareClicked} setSqureClicked={setSqureClicked} possibleMoves={possibleMoves}  setPossibleMoves={setPossibleMoves} figurePositions={figurePositions} setFigurePositions={setFigurePositions} key={ind} name ={square} rowName={name} number={even?number*8+ind+1:(number+1)*8-ind}></Square>
				}
			)}
		</div>
	);
};

export default Row;