import React ,{useContext} from 'react';
import Modal from 'react-modal'; //모달 라이브러리 임포트
import styles from '../css/TodoModal.module.css';
import { DateContext } from '../context';

function TodoModal({modalIsOpen,setModalIsOpen}){
	const {date,setDate,select,setSelect} = useContext(DateContext);
	
	const week = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
	const selectYear = select.getFullYear();
	const selectMonth = select.getMonth();
	const selectDate = select.getDate();
	const selectDay = select.getDay();
	
	return(
		<div className={styles.form}>
			<Modal className={styles.popup} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} >
				<div className={styles.selectday}>{selectYear}년 {selectMonth}월 {selectDate}일</div>
				<div className={styles.week}>{week[selectDay]}</div>
			</Modal>
		</div>
	)
}

export default TodoModal;