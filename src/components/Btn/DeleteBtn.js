import React from 'react';
import styles from '../../css/Btn/DeleteBtn.module.css';
import { MdDelete } from 'react-icons/md';
import {useTodoDispatch} from '../../context';

function DeleteBtn({id}){
	const dispatch = useTodoDispatch();
	
	const onDelete= () => dispatch({type:"REMOVE",id});
	return(
		<div className={styles.form}>
			<div className={styles.delete} onClick={onDelete}><MdDelete/></div>
		</div>
	)
}

export default DeleteBtn;