import React from 'react';
import { useState } from 'react';
import BlackQueen from './BlackQueen';
const BlackPawn = ({promotion, setPromotion, enPassant, setEnPassant, movesNamesHistory,colorNow, setColorNow, figurePositions, squareClicked, setSqureClicked, possibleMoves, setPossibleMoves, fullName,rowName,name,...props}) => {

	const str = ['A','B','C','D','E','F', 'G', 'H']
	const handleClick = () =>{
		if (fullName===squareClicked){
			setSqureClicked('')
			setPossibleMoves([])
		}
		else if (colorNow==='black'){
			setSqureClicked(fullName)
			let arr = []
			// [name+(+rowName+2), name+(+rowName+1)]:[name+(+rowName+1)]
			if ( rowName==='7'){
				if (figurePositions[name+(+rowName-1)]==='Em'){
					if (figurePositions[name+(+rowName-2)]==='Em'){
						arr.push(name+(+rowName-2))
					}
					arr.push(name+(+rowName-1))
				}

			}else if (figurePositions[name+(+rowName-1)]==='Em'){
				arr.push(name+(+rowName-1))
			}
			if ( rowName==='4'){
				let letterIndex=(str.indexOf(name))
				if (letterIndex === 0){
					if (movesNamesHistory[movesNamesHistory.length -1][0]==='B2'
					&&movesNamesHistory[movesNamesHistory.length -1][1]==='B4')
					{
						console.log('B3')
						setEnPassant('B3')
						arr.push('B3')
					}
				}
				else if (letterIndex === 7){
					if (movesNamesHistory[movesNamesHistory.length -1][0]==='G2'
					&&movesNamesHistory[movesNamesHistory.length -1][1]==='G4')
					{
						console.log('G3')
						setEnPassant('G3')
						arr.push('G3')
						
					}
				}
				else{
					if (movesNamesHistory[movesNamesHistory.length -1][0]===`${str[letterIndex-1]}2`
					&&movesNamesHistory[movesNamesHistory.length -1][1]===`${str[letterIndex-1]}4`)
					{
						console.log(`${str[letterIndex-1]}3`)
						setEnPassant(`${str[letterIndex-1]}3`)
						arr.push(`${str[letterIndex-1]}3`)
						
					}else if (movesNamesHistory[movesNamesHistory.length -1][0]===`${str[letterIndex+1]}2`
					&&movesNamesHistory[movesNamesHistory.length -1][1]===`${str[letterIndex+1]}4`)
					{
						console.log(`${str[letterIndex+1]}3`)
						setEnPassant(()=>`${str[letterIndex+1]}3`)
						arr.push(`${str[letterIndex+1]}3`)
						
					}
				}
			}
			if (name!='H')
				{
					if (figurePositions[str[str.indexOf(name)+1]+(+rowName-1)][0]==='W'){
						arr.push(str[str.indexOf(name)+1]+(+rowName-1))
					}
				}
				if (name!='A')
				{	
					if (figurePositions[str[str.indexOf(name)-1]+(+rowName-1)][0]==='W'){
						arr.push(str[str.indexOf(name)-1]+(+rowName-1))
					}
				}
			if (figurePositions[str[str.indexOf(name)]+(+rowName-1)]!='Em')
				{	
					arr = [...arr].filter(elem=>elem!=str[str.indexOf(name)]+(+rowName-1))
					
				}	

			setPossibleMoves(arr)

		}

	}
	return (
		<div  style={{display: 'flex', width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}} 
		onClick={(e)=>handleClick()}>
			<img {...props} src={require('../blackPieces/Pawn.png')}>
			
			</img>
		</div>
	);
};

export default BlackPawn;