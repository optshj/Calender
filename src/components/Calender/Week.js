import React from 'react';
import styles from '../../css/Calender/Week.module.css';

function Week(){ //일주일 표시
	const weeks = [];
	const week = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
	for (let i = 0;i<7;i++){
		weeks.push(
			<div className={styles.week}>{week[i]}</div>
		)
	}
	return(
		<div className={styles.form}>
			{weeks}
		</div>
	)
}

export default Week;