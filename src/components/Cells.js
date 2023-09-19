import React from 'react';
import styles from '../css/Cells.module.css';

function Cells({day}){
	
	return(
		<div className={styles.cell}>
			<div className={styles.day}>{day}</div>
		</div>
	)
}

export default Cells;