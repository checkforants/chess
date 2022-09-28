import React from 'react';
import { useState } from 'react';
import WhiteQueen from './WhiteQueen';
const WhitePawn = ({promotion, setPromotion, enPassant, setEnPassant, movesNamesHistory, colorNow, setColorNow, figurePositions, squareClicked, setSqureClicked, possibleMoves, setPossibleMoves, fullName,rowName,name,...props}) => {

	
	const str = ['A','B','C','D','E','F', 'G', 'H']
	const handleClick = () =>{
		if (fullName===squareClicked){
			setSqureClicked('')
			setPossibleMoves([])
		}
		else if (colorNow==='white'){
			setSqureClicked(fullName)
			let arr = []
			// [name+(+rowName+2), name+(+rowName+1)]:[name+(+rowName+1)]
			if ( rowName==='2'){
				if (figurePositions[name+(+rowName+1)]==='Em'){
					if (figurePositions[name+(+rowName+2)]==='Em'){
						arr.push(name+(+rowName+2))
					}
					arr.push(name+(+rowName+1))
				}

			}else if (figurePositions[name+(+rowName+1)]==='Em'){
				arr.push(name+(+rowName+1))
			}
			if ( rowName==='5'){
				let letterIndex=(str.indexOf(name))
				if (letterIndex === 0){
					if (movesNamesHistory[movesNamesHistory.length -1][0]==='B7'
					&&movesNamesHistory[movesNamesHistory.length -1][1]==='B5')
					{
						console.log('B6')
						setEnPassant('B6')
						arr.push('B6')
					}
				}
				else if (letterIndex === 7){
					if (movesNamesHistory[movesNamesHistory.length -1][0]==='G7'
					&&movesNamesHistory[movesNamesHistory.length -1][1]==='G5')
					{
						console.log('G6')
						setEnPassant('G6')
						arr.push('G6')
						
					}
				}
				else{
					if (movesNamesHistory[movesNamesHistory.length -1][0]===`${str[letterIndex-1]}7`
					&&movesNamesHistory[movesNamesHistory.length -1][1]===`${str[letterIndex-1]}5`)
					{
						console.log(`${str[letterIndex-1]}6`)
						setEnPassant(`${str[letterIndex-1]}6`)
						arr.push(`${str[letterIndex-1]}6`)
						
					}else if (movesNamesHistory[movesNamesHistory.length -1][0]===`${str[letterIndex+1]}7`
					&&movesNamesHistory[movesNamesHistory.length -1][1]===`${str[letterIndex+1]}5`)
					{
						console.log(`${str[letterIndex+1]}6`)
						setEnPassant(()=>`${str[letterIndex+1]}6`)
						arr.push(`${str[letterIndex+1]}6`)
						
					}
				}
			}

			if (name!=='H'){
				if (figurePositions[str[str.indexOf(name)+1]+(+rowName+1)][0]==='B'){
					arr.push(str[str.indexOf(name)+1]+(+rowName+1))
				}
			}
			if (name!=='A'){
				if (figurePositions[str[str.indexOf(name)-1]+(+rowName+1)][0]==='B'){
					arr.push(str[str.indexOf(name)-1]+(+rowName+1))
				}
			}
			if (figurePositions[str[str.indexOf(name)]+(+rowName+1)]!=='Em')
				{	
					arr = [...arr].filter(elem=>elem!==str[str.indexOf(name)]+(+rowName+1))
					console.log(arr)
				}	


			setPossibleMoves(arr)
		}
	}

	return (
		<div  style={{display: 'flex', width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}} 
		onClick={(e)=>handleClick()}>
			<img {...props} src={require('../whitePieces/Pawn.png')}>
			
			</img>
		</div>
	);
};

export default WhitePawn;