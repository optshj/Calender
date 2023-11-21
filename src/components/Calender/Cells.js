import React,{useContext} from 'react';
import style from '../../css/Calender/Cells.module.css';
import { DateContext } from '../../context';

import Schedule from './Schedule';

function Cells({day,inMonth,selected}){
	const {setSelect} = useContext(DateContext);
	const onClick = () => {
		setSelect(day); //선택된 날짜 변경
	}
	
	return(
		<div className={selected?style.select:style.cell} onClick={onClick}>
			<div className={inMonth?style.day:style.otherDay}>{day.getDate()}</div>
			<Schedule day={day}/>
		</div>
	)
}

export default Cells;