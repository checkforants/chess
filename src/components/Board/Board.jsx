import React, {useState} from 'react';
import cl from './Board.module.scss'
import Row from '../Row/Row'
import PromotionModal from '../PromotionModal/PromotionModal';
const Board = ({colorNow, setColorNow, movesNamesHistory, setMovesNamesHistory, movesHistory, setMovesHistory, reversed, figurePositions, setFigurePositions, ...props}) => {

	const [possibleMoves, setPossibleMoves] = useState([]);


	const [promotion, setPromotion] = useState(false);
	const [promotionFigure, setPromotionFigure]=useState(false);
		


	const [squareClicked, setSqureClicked] = useState('');
	
	const [enPassant, setEnPassant] = useState(false);
	
	const rows = ['1','2','3','4','5','6', '7', '8']
	const coordsX = ['A','B','C','D','E','F', 'G', 'H']
	const clName=[cl.rows]
	const coordsXclassName = [cl.coordsX]
	const coordsYclassName = [cl.coordsY]
	
	if (reversed){
		clName.push(cl.reversed)
		coordsXclassName.push(cl.reversed)
		coordsYclassName.push(cl.reversed)
	}
	
	return (
		<div className={clName.join(' ')}>
			<PromotionModal setFigurePositions={setFigurePositions} setPromotionFigure={setPromotionFigure} reversed={reversed} colorNow={colorNow} promotion={promotion} setPromotion={setPromotion}></PromotionModal>
			{rows.map((row, ind)=>{
				return <Row promotionFigure={promotionFigure} setPromotionFigure={setPromotionFigure} promotion={promotion} setPromotion={setPromotion} enPassant={enPassant} setEnPassant={setEnPassant} movesNamesHistory={movesNamesHistory} setMovesNamesHistory={setMovesNamesHistory} movesHistory={movesHistory} setMovesHistory={setMovesHistory} colorNow={colorNow} setColorNow={setColorNow} squareClicked={squareClicked} setSqureClicked={setSqureClicked} figurePositions={figurePositions} setFigurePositions={setFigurePositions} possibleMoves={possibleMoves} setPossibleMoves={setPossibleMoves} reversed={reversed} key={ind} name ={row} even={ind%2===0} number={ind}></Row>
			}
			)}
			<div className={coordsXclassName.join(' ')}>
			{coordsX.map((x, ind)=>{
				return <div key={ind}  className={`${cl.x} ${reversed?ind%2===0?cl.black:cl.white:ind%2===0?cl.white:cl.black}`}>
				{x}</div>
			}
			)}
			</div>
			<div className={coordsYclassName.join(' ')}>
			{rows.map((y, ind)=>{
				return <div  key={ind} className={`${cl.y} ${reversed?ind%2===0?cl.white:cl.black:ind%2===0?cl.black:cl.white}`}>{y}</div>
			}
			)}
			</div>
		</div>
	);
};

export default Board;