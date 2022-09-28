import React from 'react';

const WhiteBishop = ({colorNow, setColorNow, figurePositions, squareClicked, setSqureClicked, possibleMoves, setPossibleMoves, fullName,rowName,name,...props}) => {
	const str = ['A','B','C','D','E','F', 'G', 'H']

	const handleClick = () =>{
		
		if (fullName===squareClicked){
			setSqureClicked('')
			setPossibleMoves([])
		}
		else if (colorNow==='white'){
			
			setSqureClicked(fullName)
			let arr = []
			let startNumber = str.indexOf(name)
			let firstDir_x = startNumber-1
			let firstDir_y = +rowName+1
			while (firstDir_y<9 && firstDir_y>0 && firstDir_x<8 && firstDir_x>-1 && figurePositions[str[firstDir_x]+firstDir_y][0]!=='W'){
				arr.push(str[firstDir_x]+firstDir_y)
				if (figurePositions[str[firstDir_x]+firstDir_y][0]==='B'){break}
				firstDir_x -=1
				firstDir_y +=1
			}
			let secondDir_x = startNumber+1
			let secondDir_y = +rowName+1
			while (secondDir_y<9 && secondDir_y>0 && secondDir_x<8 && secondDir_x>-1 && figurePositions[str[secondDir_x]+secondDir_y][0]!=='W'){
				console.log(str[firstDir_x]+firstDir_y)
				arr.push(str[secondDir_x]+secondDir_y)
				if (figurePositions[str[secondDir_x]+secondDir_y][0]==='B'){break}
				secondDir_x +=1
				secondDir_y +=1
			}


			//3-4
			firstDir_x = startNumber+1
			firstDir_y = +rowName-1
			while (firstDir_y<9 && firstDir_y>0 && firstDir_x<8 && firstDir_x>-1 && figurePositions[str[firstDir_x]+firstDir_y][0]!=='W'){
				arr.push(str[firstDir_x]+firstDir_y)
				if (figurePositions[str[firstDir_x]+firstDir_y][0]==='B'){break}
				firstDir_x +=1
				firstDir_y -=1
			}
			secondDir_x = startNumber-1
			secondDir_y = +rowName-1
			while (secondDir_y<9 && secondDir_y>0 && secondDir_x<8 && secondDir_x>-1 && figurePositions[str[secondDir_x]+secondDir_y][0]!=='W'){
				arr.push(str[secondDir_x]+secondDir_y)
				if (figurePositions[str[secondDir_x]+secondDir_y][0]==='B'){break}
				secondDir_x -=1
				secondDir_y -=1
			}
			setPossibleMoves(arr)

		}
	}
	return (
		<div  style={{display: 'flex', width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}} 
		onClick={(e)=>handleClick()}>
			<img {...props} src={require('../whitePieces/Bishop.png')}>
			
			</img>
		</div>
	);
};

export default WhiteBishop;