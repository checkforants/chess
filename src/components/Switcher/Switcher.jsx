import React from 'react';
import cl from './Switcher.module.scss'
const Switcher = ({setReversed, ...props}) => {
	const handleChange = (event) => {
		setReversed(prev=>!prev);
	};
	return (
		<label className={cl.switch}>
			<input type="checkbox" onClick={handleChange}/>
			<span className={`${cl.slider} ${cl.round}`}></span>
		</label>
	);
};

export default Switcher;