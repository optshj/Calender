import React from 'react';
import style from '../../css/Calender/Week.module.css';

function Week(){ //일주일 표시
	const week = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
	const weekElement = week.map(item => <div className={style.week}>{item}</div>);
	
	return(
		<div className={style.form}>
			{weekElement}
		</div>
	)
}

export default Week;