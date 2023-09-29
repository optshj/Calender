import React from 'react';
import styles from '../css/Calender/Schedule.module.css';
import { useTodoState } from '../context';

function Schedule({day}){
	const todos = useTodoState();

	return(
		<div className={styles.form}>
			{todos.map(todo=>(
				todo.date.toDateString() === day.toDateString()
				? <div className={styles.schedule} style={{'background-color':todo.color}}>{todo.text}</div>
					:null))}
		</div>
	)
}

export default Schedule;