import React from 'react';
import styles from '../../css/Calender/Schedule.module.css';
import { useTodoState } from '../../context';
import DeleteBtn from '../Btn/DeleteBtn';

function Schedule({day}){
	const todos = useTodoState();

	return(
		<div className={styles.form}>
			{todos.map(todo=>(
				todo.date.toDateString() === day.toDateString()
				? <div className={todo.done?styles.done:styles.schedule} style={{'backgroundColor':todo.color}} key={todo.id}>
					{todo.text}
					<DeleteBtn className={styles.delete} id={todo.id}/>
				</div>
					:null))}
		</div>
	)
}

export default Schedule;