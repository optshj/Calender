import React from 'react';
import style from '../../css/Calender/Schedule.module.css';
import { useTodoState } from '../../context';

import DeleteBtn from '../Btn/DeleteBtn';

import { MdDone } from 'react-icons/md';

function Schedule({day}){
	const todos = useTodoState();
	
	return(
		<div className={style.form}>
			{todos.map(todo=>(
				todo.date === day.toDateString()
				? <div className={todo.done?style.done:style.schedule} style={{'backgroundColor':todo.color}} key={todo.id}>
					<div done={todo.done} className={todo.done ? style.checkcircle : style.notcheckcircle}>{todo.done&&<MdDone/>}</div>
					{todo.text}
					<DeleteBtn className={style.delete} id={todo.id}/>
				</div>:null))}
		</div>
	)
}

export default Schedule;