import React from 'react';
import styles from '../css/Cells.module.css';

function Cells({day}){
	
	return(
		<div className={styles.cell}>
			{day}
		</div>
	)
}

export default Cells;