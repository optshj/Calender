import React ,{useContext} from 'react';
import styles from '../../css/Todo/TodoHead.module.css';
import { DateContext } from '../../context';
import { AiOutlineClose } from "react-icons/ai";

function TodoHead({setModalIsOpen}){
	const {select} = useContext(DateContext);
	
	//날짜 표시를 위한 설정
	const week = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
	const selectYear = select.getFullYear();
	const selectMonth = select.getMonth();
	const selectDate = select.getDate();
	const selectDay = select.getDay();
	
	return(
		<div className={styles.form}>
			<div className={styles.date}>
				<div className={styles.selectday}>{selectYear}년 {selectMonth+1}월 {selectDate}일</div>
				<div className={styles.week}>{week[selectDay]}</div>
			</div>
			<div className={styles.exit} onClick={() => setModalIsOpen(false)}><AiOutlineClose/></div>
		</div>
	)
}

export default TodoHead;