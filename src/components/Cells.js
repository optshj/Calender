import React,{useContext} from 'react';
import styles from '../css/Calender/Cells.module.css';
import { DateContext } from '../context';

function Cells({day,inMonth,selected}){
	const {setSelect} = useContext(DateContext);
	const onClick = () => {
		setSelect(day); //선택된 날짜 변경
	}
	return(
		<div className={selected?styles.select:styles.cell} onClick={onClick}>
			<div className={inMonth?styles.day:styles.otherDay}>{day.getDate()}</div>
		</div>
	)
}

export default Cells;