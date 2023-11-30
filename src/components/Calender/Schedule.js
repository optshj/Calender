import React from 'react';
import style from '../../css/Calender/Schedule.module.css';
import { useTodoState } from '../../context';

function Schedule({day}){
	const todos = useTodoState();
	const maxShow = 4; //최대로 보여줄 스케줄 수
	const todayTodo = todos.filter(todo=>(todo.date === day.toDateString()));
	const schedules = todayTodo.map(todo=>(<div className={todo.done ? style.done:style.schedule} style={{'backgroundColor':todo.color}} key={todo.id}>
					{todo.text}</div>));
	console.log(schedules);
	return(
		<div className={style.form}>
			{schedules.slice(0,4)}
			<div className={schedules.length > maxShow ? style.overschedule : style.hide}>+{schedules.length-maxShow}</div>
		</div>
	)
}

export default Schedule;