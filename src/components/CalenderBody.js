import React,{useContext,useState} from 'react';
import styles from '../css/CalenderBody.module.css';
import { DateContext } from '../context';
import Header from './Header';
import Cells from './Cells';
import Week from './Week';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameDay} from 'date-fns';

function CalenderBody(){
	const {date,setDate,select,setSelect} = useContext(DateContext); //날짜 전역변수
	
	const monthStart = startOfMonth(date); //달력에서 월의 시작하는 날짜
	const monthEnd = endOfMonth(date); //달력에서 월의 끝나는 날짜
	const startDate = startOfWeek(monthStart); //달력에서 제일 첫 날짜
	const endDate = endOfWeek(monthEnd); //달력에서 제일 끝 날자
	
	let day = startDate;
	let days = [];
	let weeks = [];
	
	while (day <= endDate){
		for (let i=0;i<7;i++){
			const inMonth = day.getMonth() === monthStart.getMonth();
			days.push(
				<Cells day={day} inMonth={inMonth} selected = {isSameDay(day,select)}/> //선택된 항목의 날짜가 해당 항목의 날짜랑 같은지?
			)
			day = addDays(day,1);
		}
		weeks.push(
			<div className={styles.week}>
				{days}
			</div>	
		);
		days = [];
	}
	return(
		<div>
			<Header/>
			<Week/>
			<div className={styles.cellform}>
				{weeks}
			</div>
		</div>
	)
}

export default CalenderBody;