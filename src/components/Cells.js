import React,{useContext} from 'react';
import styles from '../css/Cells.module.css';
import { DateContext } from '../context';

function Cells({day,inMonth,selected}){
	const {select,setSelect} = useContext(DateContext);
	const onClick = () => {
		setSelect(day);
	}
	return(
		<div className={selected?styles.select:styles.cell} onClick={onClick}>
			<div className={inMonth?styles.day:styles.otherDay}>{day.getDate()}</div>
		</div>
	)
}

export default Cells;