import React from 'react';

const BlackRook = ({colorNow, setColorNow, figurePositions, squareClicked, setSqureClicked, possibleMoves, setPossibleMoves, fullName,rowName,name,...props}) => {
	const str = ['A','B','C','D','E','F', 'G', 'H']

	const handleClick = () =>{
		if (fullName===squareClicked){
			setSqureClicked('')
			setPossibleMoves([])
		}
		else if (colorNow==='black'){
			setSqureClicked(fullName)
			let arr = []
			const startNumber = str.indexOf(name)
			let r_edge= startNumber+1;
			let l_edge = startNumber-1;
			let t_edge = +rowName+1;
			let b_edge = +rowName-1;
			console.log(t_edge)

			while (t_edge<9 && figurePositions[name+String(t_edge)][0]!=='B'){

				arr.push(name+String(t_edge))
				if (figurePositions[name+String(t_edge)][0]==='W'){break}
				t_edge+=1
			}
			while (b_edge>0 && figurePositions[name+String(b_edge)][0]!=='B'){
				arr.push(name+String(b_edge))
				if (figurePositions[name+String(b_edge)][0]==='W'){break}
				b_edge-=1
			}
			while (r_edge<8 && figurePositions[str[r_edge]+rowName][0]!=='B'){
				arr.push(str[r_edge]+rowName)
				if (figurePositions[str[r_edge]+rowName][0]==='W'){break}
				r_edge+=1
			}
			while (l_edge>-1 && figurePositions[str[l_edge]+rowName][0]!=='B'){
				arr.push(str[l_edge]+rowName)
				if (figurePositions[str[l_edge]+rowName][0]==='W'){break}
				l_edge-=1
			}
			setPossibleMoves(arr)
		}
	}
	return (
		<div  style={{display: 'flex', width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}} 
		onClick={(e)=>handleClick()}>
			<img {...props} src={require('../blackPieces/Rook.png')}>
			
			</img>
		</div>
	);
};

export default BlackRook;