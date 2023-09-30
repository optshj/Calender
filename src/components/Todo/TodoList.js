import React,{ useContext } from 'react';
import styles from '../../css/Todo/TodoList.module.css';
import TodoItem from './TodoItem';
import { useTodoState } from '../../context';
import { DateContext } from '../../context';

function TodoList({selectDay}){
	const todos = useTodoState();
	const {select} = useContext(DateContext);

	return(
		<div className={styles.form}>
			{todos.map(todo=>(
				todo.date.toDateString() === select.toDateString()
				? <TodoItem 
					  id={todo.id}
					  text={todo.text}
					  done={todo.done}
					  key={todo.id}
					  />:null))}
		</div>
	)
}

export default TodoList;