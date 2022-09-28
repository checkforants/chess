import React from 'react';
import cl from './TimeSelector.module.scss'
const TimeSelector = ({setAdd, setMinutes, ...props}) => {
	return (
		<div className={cl.block}>
			<select onChange={e=>{setMinutes(e.target.value[0]); setAdd(e.target.value[3])}} className={cl.select}>
				<option value={1}>1+2</option>
				<option value={3}>3+1</option>
				<option value={5}>5+0</option>
			</select>
			<button>Start</button>
		</div>
	);
};

export default TimeSelector;