import React from 'react';
import styles from '../../css/Todo/TodoBody.module.css';
import TodoHead from './TodoHead';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

function TodoBody(){
	
	return(
			<div className={styles.form}>
				<TodoHead/>
				<TodoList/>
				<TodoAdd/>
			</div>
	)
}

export default TodoBody;