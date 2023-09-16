import React ,{useContext} from 'react';
import styles from '../css/Header.module.css';
import {AiFillCaretLeft,AiFillCaretRight } from "react-icons/ai";
import { DateContext } from '../context';
import {addMonths,subMonths } from 'date-fns';

function Header(){
	const {date,setDate} = useContext(DateContext);
	
	function onPrev() {
		setDate(subMonths(date,1));
	}
	function onNext() {
		setDate(addMonths(date,1));
	}
	return(
		<div className={styles.form}>
			<div className={styles.leftform}>
				<div className={styles.month}>{date.getMonth()+1}월</div>
				<div className={styles.year}>{date.getFullYear()}</div>
			</div>
			<div className={styles.rightform}>
				<div className={styles.prev} onClick={onPrev}><AiFillCaretLeft/></div>
				<div className={styles.next} onClick={onNext}><AiFillCaretRight/></div>
			</div>
		</div>
	)
}

export default Header;