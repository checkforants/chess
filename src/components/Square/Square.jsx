import cl from './Square.module.scss'
import React from 'react';
import WhitePawn from './figures/WhitePawn';
import BlackPawn from './figures/BlackPawn';
import WhiteRook from './figures/WhiteRook';
import BlackRook from './figures/BlackRook';
import WhiteKnight from './figures/WhiteKnight';
import BlackKnight from './figures/BlackKnight';
import WhiteBishop from './figures/WhiteBishop';
import BlackBishop from './figures/BlackBishop';
import WhiteKing from './figures/WhiteKing';
import BlackKing from './figures/BlackKing';
import WhiteQueen from './figures/WhiteQueen';
import BlackQueen from './figures/BlackQueen';
import { useState, useEffect } from 'react';

const Square = ({promotionFigure, setPromotionFigure, promotion, setPromotion, enPassant, setEnPassant, movesNamesHistory, setMovesNamesHistory, movesHistory, setMovesHistory, colorNow, setColorNow, squareClicked, setSqureClicked, figurePositions, setFigurePositions, number,name, rowName, possibleMoves, setPossibleMoves, ...props}) => {
	
	

	let clName = [cl.square]
	let content =''
	if (number%2===0){
		clName.push(cl.white)
	}else{
		clName.push(cl.black)
	}
	const fullName = name+rowName
	if (possibleMoves.includes(fullName)){
		clName.push(cl.possibleMove)
	}
	if (fullName in figurePositions){
		content = figurePositions[fullName]
	}
	const handleClick = ()=>{
		if (possibleMoves.includes(fullName)){
			
			let newFigurePositions = Object.assign({}, figurePositions)
			
			newFigurePositions[fullName] = figurePositions[squareClicked]
			newFigurePositions[squareClicked] = 'Em'
			//обрабатываем promotion пешки
			const str = ['A','B','C','D','E','F', 'G', 'H']
			if (figurePositions[squareClicked]==='WP'&&fullName[1]==8){
				console.log('asdasd')
				setPromotion(+str.indexOf(fullName[0])+1)
			}
			if (figurePositions[squareClicked]==='BP'&&fullName[1]==1){
				console.log('asdasd')
				setPromotion(+str.indexOf(fullName[0])+1)
				
			}
			// взятие на проходе 
			if (fullName===enPassant){
				if (fullName[1]==='6'){
					newFigurePositions[enPassant[0]+String(+enPassant[1]-1)]= 'Em'
					setEnPassant(false)
				}
				if (fullName[1]==='3'){
					newFigurePositions[enPassant[0]+String(+enPassant[1]+1)]= 'Em'
					setEnPassant(false)
				}
			}
			setMovesHistory(prev=>{prev.push(figurePositions); return prev})
			setMovesNamesHistory(prev=>{prev.push([squareClicked, fullName]); return prev})
			console.log(movesHistory)
			console.log(movesNamesHistory)
			setFigurePositions(newFigurePositions)
			setPossibleMoves([])
			
			setColorNow(prev=>prev==='white'?'black':'white')
		}
	}
	return (
		<div className={clName.join(' ')} onClick={()=>handleClick()}>
		{fullName in figurePositions
		?figurePositions[fullName]==='WP'?<WhitePawn promotion={promotion} setPromotion={setPromotion} enPassant={enPassant} setEnPassant={setEnPassant} movesNamesHistory={movesNamesHistory} colorNow={colorNow} setColorNow={setColorNow} figurePositions={figurePositions} squareClicked={squareClicked} setSqureClicked={setSqureClicked} possibleMoves={possibleMoves} rowName={rowName} setPossibleMoves={setPossibleMoves} fullName={fullName} name={name} style={{maxHeight:'30px'}}/>
		:figurePositions[fullName]==='BP'?<BlackPawn promotion={promotion} setPromotion={setPromotion} enPassant={enPassant} setEnPassant={setEnPassant} movesNamesHistory={movesNamesHistory} colorNow={colorNow} setColorNow={setColorNow} figurePositions={figurePositions} squareClicked={squareClicked} setSqureClicked={setSqureClicked} possibleMoves={possibleMoves} rowName={rowName} setPossibleMoves={setPossibleMoves} fullName={fullName} name={name} style={{maxHeight:'30px'}}/>
		:figurePositions[fullName]==='WR'?<WhiteRook colorNow={colorNow} setColorNow={setColorNow} figurePositions={figurePositions} squareClicked={squareClicked} setSqureClicked={setSqureClicked} possibleMoves={possibleMoves} rowName={rowName} setPossibleMoves={setPossibleMoves} fullName={fullName} name={name} style={{maxHeight:'40px'}}/>
		:figurePositions[fullName]==='BR'?<BlackRook colorNow={colorNow} setColorNow={setColorNow} figurePositions={figurePositions} squareClicked={squareClicked} setSqureClicked={setSqureClicked} possibleMoves={possibleMoves} rowName={rowName} setPossibleMoves={setPossibleMoves} fullName={fullName} name={name} style={{maxHeight:'40px'}}/>
		:figurePositions[fullName]==='WKn'?<WhiteKnight colorNow={colorNow} setColorNow={setColorNow} figurePositions={figurePositions} squareClicked={squareClicked} setSqureClicked={setSqureClicked} possibleMoves={possibleMoves} rowName={rowName} setPossibleMoves={setPossibleMoves} fullName={fullName} name={name} style={{maxHeight:'40px'}}/>
		:figurePositions[fullName]==='BKn'?<BlackKnight colorNow={colorNow} setColorNow={setColorNow} figurePositions={figurePositions} squareClicked={squareClicked} setSqureClicked={setSqureClicked} possibleMoves={possibleMoves} rowName={rowName} setPossibleMoves={setPossibleMoves} fullName={fullName} name={name} style={{maxHeight:'40px'}}/>
		:figurePositions[fullName]==='WB'?<WhiteBishop colorNow={colorNow} setColorNow={setColorNow} figurePositions={figurePositions} squareClicked={squareClicked} setSqureClicked={setSqureClicked} possibleMoves={possibleMoves} rowName={rowName} setPossibleMoves={setPossibleMoves} fullName={fullName} name={name} style={{maxHeight:'40px'}}/>
		:figurePositions[fullName]==='BB'?<BlackBishop colorNow={colorNow} setColorNow={setColorNow} figurePositions={figurePositions} squareClicked={squareClicked} setSqureClicked={setSqureClicked} possibleMoves={possibleMoves} rowName={rowName} setPossibleMoves={setPossibleMoves} fullName={fullName} name={name} style={{maxHeight:'40px'}}/>
		:figurePositions[fullName]==='WK'?<WhiteKing colorNow={colorNow} setColorNow={setColorNow} figurePositions={figurePositions} squareClicked={squareClicked} setSqureClicked={setSqureClicked} possibleMoves={possibleMoves} rowName={rowName} setPossibleMoves={setPossibleMoves} fullName={fullName} name={name} style={{maxHeight:'50px'}}/>
		:figurePositions[fullName]==='BK'?<BlackKing colorNow={colorNow} setColorNow={setColorNow} figurePositions={figurePositions} squareClicked={squareClicked} setSqureClicked={setSqureClicked} possibleMoves={possibleMoves} rowName={rowName} setPossibleMoves={setPossibleMoves} fullName={fullName} name={name} style={{maxHeight:'50px'}}/>
		:figurePositions[fullName]==='WQ'?<WhiteQueen colorNow={colorNow} setColorNow={setColorNow} figurePositions={figurePositions} squareClicked={squareClicked} setSqureClicked={setSqureClicked} possibleMoves={possibleMoves} rowName={rowName} setPossibleMoves={setPossibleMoves} fullName={fullName} name={name} style={{maxHeight:'40px'}}/>
		:figurePositions[fullName]==='BQ'?<BlackQueen colorNow={colorNow} setColorNow={setColorNow} figurePositions={figurePositions} squareClicked={squareClicked} setSqureClicked={setSqureClicked} possibleMoves={possibleMoves} rowName={rowName} setPossibleMoves={setPossibleMoves} fullName={fullName} name={name} style={{maxHeight:'40px'}}/>
		:<div/>:''}
		</div>
	);
};

export default Square;