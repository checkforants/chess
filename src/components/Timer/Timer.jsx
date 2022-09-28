import React, { useRef } from 'react';
import cl from './Timer.module.scss'
import { useState, useEffect } from 'react';
const Timer = ({setMinutes, setSeconds, setResult, color, colorNow, minutes, seconds, ...props}) => {
	const intervalRef = useRef();
	const timeHandle = ()=>{
		setSeconds(prev=>{
			if (prev==0){
				setMinutes(prev=>{
					if (prev==0){
						setResult(color+'Lost')
						setSeconds('Lost')
						setMinutes(color)
						clearInterval(intervalRef.current)
					}else{
						return prev-1
					}
				})
				return 59
			}else{
				return prev-1
			}
		})
	}
	useEffect(()=>{
		let interval
		if (colorNow==color){
			const intervalId = setInterval(timeHandle,1000) 
			intervalRef.current = intervalId;
		}
		else{
			clearInterval(intervalRef.current)
		}
		return () => {
			clearInterval(intervalRef.current);
		};
	}, [colorNow, color])

	return (
		<div className={cl.block}>
			<div className={cl.minutes}>
				{minutes}
			</div>

			<div className={cl.seconds}>
				{seconds}
			</div>
		</div>
	);
};

export default Timer;