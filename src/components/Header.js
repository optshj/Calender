import React ,{useContext,useState} from 'react';
import styles from '../css/Calender/Header.module.css';
import TodoModal from './Todo/TodoModal';
import { AiFillCaretLeft,AiFillCaretRight } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { DateContext } from '../context';
import { addMonths,subMonths } from 'date-fns';

function Header({modalIsOpen,setModalIsOpen}){ //제일 위에 있는 월,년도, 이전월, 다음월 표시
	const {date,setDate} = useContext(DateContext);

	function onPrev() {
		setDate(subMonths(date,1));
	}
	function onNext() {
		setDate(addMonths(date,1));
	}
	function onAdd() {
		setModalIsOpen(true);
	}
	
	return(
		<div >
			<div className={styles.form}>
				<div className={styles.leftform}>
					<div className={styles.day}>{date.getFullYear()}.{date.getMonth()+1}월</div>
				</div>

				<div className={styles.rightform}>
					<div className={styles.add} onClick={onAdd}><BsPlusLg/></div>
					<div className={styles.prev} onClick={onPrev}><AiFillCaretLeft/></div>
					<div className={styles.next} onClick={onNext}><AiFillCaretRight/></div>
				</div>
			</div>
			
			<TodoModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
		</div>
	)
}

export default Header;