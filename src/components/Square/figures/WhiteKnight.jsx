import React from 'react';

const WhiteKnight = ({colorNow, setColorNow, figurePositions, squareClicked, setSqureClicked, possibleMoves, setPossibleMoves, fullName,rowName,name,...props}) => {
	const str = ['A','B','C','D','E','F', 'G', 'H']

	const handleClick = () =>{
		if (fullName===squareClicked){
			setSqureClicked('')
			setPossibleMoves([])
		}
		else if (colorNow==='white'){
			setSqureClicked(fullName)
			const startNumber = str.indexOf(name)
			const knightMoves = [
				(+startNumber-1)+String(+rowName+2),
				(+startNumber+1)+String(+rowName+2),
				(+startNumber+2)+String(+rowName+1),
				(+startNumber+2)+String(+rowName-1),
				(+startNumber+1)+String(+rowName-2),
				(+startNumber-1)+String(+rowName-2),
				(+startNumber-2)+String(+rowName-1),
				(+startNumber-2)+String(+rowName+1)]

			let arr = knightMoves.filter(move=>
				move[0]>=0 && move[0]<8 && move[1]>0 && move[1]<9)

				let arr2=[]
				arr.forEach(el =>{

					if(figurePositions[str[el[0]]+el[1]][0]!=='W'){ 
						arr2.push(str[el[0]]+el[1])
					}
				})

				setPossibleMoves(arr2)

		}
	}
	return (
		<div  style={{display: 'flex', width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}} 
		onClick={(e)=>handleClick()}>
			<img {...props} src={require('../whitePieces/Knight.png')}>
			
			</img>
		</div>
	);
};

export default WhiteKnight;