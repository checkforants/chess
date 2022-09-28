
import './App.scss';
import { useState, useEffect } from 'react';
import Board from './components/Board/Board';
import Timer from './components/Timer/Timer';
import Switcher from './components/Switcher/Switcher';
import TimeSelector from './components/TimeSelector/TimeSelector';

function App() {
	const [reversed, setReversed] = useState(false);
	
	const [colorNow, setColorNow] = useState('white');

	const [figurePositions, setFigurePositions] = useState(
		{'A1': 'WR', 'B1': 'WKn', 'C1': 'WB', 'D1': 'WQ', 'E1': 'WK', 'F1': 'WB', 'G1': 'WKn', 'H1': 'WR', 
		'A2': 'WP', 'B2': 'BP', 'C2': 'WP', 'D2': 'WP', 'E2': 'WP', 'F2': 'WP', 'G2': 'WP', 'H2': 'WP',  
		'A3': 'Em', 'B3': 'Em', 'C3': 'Em', 'D3': 'Em', 'E3': 'Em', 'F3': 'Em', 'G3': 'Em', 'H3': 'Em', 
		'A4': 'Em', 'B4': 'Em', 'C4': 'Em', 'D4': 'Em', 'E4': 'Em', 'F4': 'Em', 'G4': 'Em', 'H4': 'Em', 
		'A5': 'Em', 'B5': 'Em', 'C5': 'Em', 'D5': 'Em', 'E5': 'Em', 'F5': 'Em', 'G5': 'Em', 'H5': 'Em', 
		'A6': 'Em', 'B6': 'Em', 'C6': 'Em', 'D6': 'Em', 'E6': 'Em', 'F6': 'Em', 'G6': 'Em', 'H6': 'Em',
		'A7': 'BP', 'B7': 'BP', 'C7': 'BP', 'D7': 'BP', 'E7': 'BP', 'F7': 'BP', 'G7': 'WP', 'H7': 'BP', 
		'A8': 'BR', 'B8': 'BKn', 'C8': 'BB', 'D8': 'BQ', 'E8': 'BK', 'F8': 'BB', 'G8': 'BKn', 'H8': 'BR'})
	// const [figurePositions, setFigurePositions] = useState(
	// 	{'A1': 'WR', 'B1': 'WKn', 'C1': 'WB', 'D1': 'WQ', 'E1': 'WK', 'F1': 'WB', 'G1': 'WKn', 'H1': 'WR', 
	// 	'A2': 'WP', 'B2': 'WP', 'C2': 'WP', 'D2': 'WP', 'E2': 'WP', 'F2': 'WP', 'G2': 'WP', 'H2': 'WP', 
	// 	'A7': 'BP', 'B7': 'BP', 'C7': 'BP', 'D7': 'BP', 'E7': 'BP', 'F7': 'BP', 'G7': 'BP', 'H7': 'BP', 
	// 	'A8': 'BR', 'B8': 'BKn', 'C8': 'BB', 'D8': 'BK', 'E8': 'BQ', 'F8': 'BB', 'G8': 'BKn', 'H8': 'BR'})

	const [possibleMoves, setPossibleMoves] = useState([]);

	const [movesHistory, setMovesHistory] = useState([])
	const [movesNamesHistory, setMovesNamesHistory] = useState([])


	const [whiteMinutes, setWhiteMinutes] = useState(1)
	const [whiteSeconds, setWhiteSeconds] = useState(0)
	const [blackMinutes, setBlackMinutes] = useState(1)
	const [blackSeconds, setBlackSeconds] = useState(0)
	const [whiteAdditionalTime, setWhiteAdditionalTime] = useState(0)
	const [blackAdditionalTime, setBlackAdditionalTime] = useState(0)

	const[result, setResult] = useState(false)
	const timerclass = ['timers']
	const [clocksStart, setClocksStart] = useState(false)
	if (reversed){
		timerclass.push('reversed')
	}

  return (
    <div className="App">
		<Switcher setReversed={setReversed}/>
		{/* <div className={timerclass.join(' ')}>
			<TimeSelector setAdd={setWhiteAdditionalTime} setMinutes = {setWhiteMinutes}/>
			<Timer color={'white'} colorNow={colorNow} setResult={setResult} 
			minutes={whiteMinutes} seconds={whiteSeconds}
			setMinutes={setBlackMinutes} setSeconds={setBlackSeconds}
			/>
			<Timer color={'black'} colorNow={colorNow} setResult={setResult} 
			minutes={blackMinutes} seconds={blackSeconds}
			setMinutes = {setWhiteMinutes} setSeconds={setWhiteSeconds}
			/>
			<TimeSelector setAdd={setBlackAdditionalTime} setMinutes={setBlackMinutes}/>
		</div> */}
		<Board colorNow={colorNow} setColorNow={setColorNow} movesNamesHistory={movesNamesHistory} setMovesNamesHistory={setMovesNamesHistory} movesHistory={movesHistory} setMovesHistory={setMovesHistory} figurePositions={figurePositions} setFigurePositions={setFigurePositions} possibleMoves={possibleMoves} setPossibleMoves={setPossibleMoves} className={'board'} reversed={reversed}></Board>
    </div>
  );
}

export default App;
