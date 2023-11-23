import React from 'react';
import style from '../../css/Calender/Schedule.module.css';
import { useTodoState } from '../../context';

function Schedule({day}){
	const todos = useTodoState();
	
	return(
		<div className={style.form}>
			{todos.map(todo=>(
				todo.date === day.toDateString()
				? <div className={todo.done ? style.done:style.schedule} style={{'backgroundColor':todo.color}} key={todo.id}>
					{todo.text}
				</div>:null))}
		</div>
	)
}

export default Schedule;