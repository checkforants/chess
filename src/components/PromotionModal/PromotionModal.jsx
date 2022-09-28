import React from 'react';
import cl from './PromotionModal.module.scss'
const PromotionModal = ({setFigurePositions, setPromotionFigure,reversed, colorNow, promotion, setPromotion, ...props}) => {
	let modalClasses = [cl.window]
	let c
	let color='white'
	let row;
	const str = ['A','B','C','D','E','F', 'G', 'H'];
	let letter='W';
	if (promotion){
		if (colorNow==='black'&&!reversed)
		{	
			if (!reversed)
			{c = {left:`${(+promotion-1)*62.5}px`, top:'0px'}}

			if (reversed){
			c = {right:`${(+promotion-1)*62.5}px`, top:'250px', flexDirection:'column-reverse'}
			}
			color='white'
			row=8
		}
		if (colorNow==='white')
		{
			if (reversed)
				{c = {right:`${(+promotion-1)*62.5}px`, top:'0px'}}
			else
				{c = {left:`${(+promotion-1)*62.5}px`, top:'250px', flexDirection:'column-reverse'}}
			color='black'
			row=1
		}
		modalClasses.push(cl.active)
		letter=color[0].toUpperCase()
		console.log(letter)
	}
	const handleClick=(figure)=>{
		console.log(str[promotion-1]+row, figure)
		setPromotionFigure(figure);
		setFigurePositions(prev=>
			{
				prev[str[promotion-1]+row] = figure
				return prev
			})
		setPromotion(false)
	}
	return (
		<div className={modalClasses.join(' ')} style={c}>
			<img onClick={()=>{handleClick(letter+'Q')}} src={require(`../Square/${color}Pieces/Queen.png`)}/>
			<img onClick={()=>{handleClick(letter+'R')}} src={require(`../Square/${color}Pieces/Rook.png`)}/>
			<img onClick={()=>{handleClick(letter+'B')}} src={require(`../Square/${color}Pieces/Bishop.png`)}/>
			<img onClick={()=>{handleClick(letter+'Kn')}} src={require(`../Square/${color}Pieces/Knight.png`)}/>
		</div>
	);
};

export default PromotionModal;