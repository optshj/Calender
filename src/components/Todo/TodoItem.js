import React,{useState} from 'react';
import styles from '../../css/Todo/TodoItem.module.css';
import { MdDone, MdDelete } from 'react-icons/md';
import { AiOutlineCheck , AiOutlineClose,AiFillEdit } from "react-icons/ai";
import { useTodoDispatch } from '../../context';



function TodoItem({id,text,done,color,date}){
	const dispatch = useTodoDispatch();
	const [value,setValue] = useState(text);
	const [edit,setEdit] = useState(false);
	
	const onToggle = () => dispatch({type:"TOGGLE",id});
	const onDelete = () => dispatch({type:"REMOVE",id});
	const onModify = () => {
		setValue("");
		setEdit(true);
	}
	const onCancel = () => {
		setValue(text);
		setEdit(false);
	}
	const onCheck = () => {
		if (value)
		setEdit(false);
	}
	const onSubmit = e => {
		e.preventDefault();
		if (value){
			setEdit(false);
			dispatch({type:"MODIFY",id,value:value});
			const todo = {
				id:id,
				date:date,
				text:value,
				done:done,
				color:color
			}
			window.localStorage.setItem(id,JSON.stringify(todo));

		}
	}
	
	
	return(
		<div className={styles.form}>
			<div done={done} className={done ? styles.checkcircle : styles.notcheckcircle} onClick={onToggle}>{done&&<MdDone/>}</div>
			{edit ? (
				<>
				<form onSubmit={onSubmit} className ={styles.submitform}>
					<input className = {styles.modifyinput} autofocus onChange={e => setValue(e.target.value)}/>
				</form>
				<div className={styles.check} onClick={onCheck}><AiOutlineCheck/></div>
				<div className={styles.cancel} onClick={onCancel}><AiOutlineClose/></div>
				</>
				) : (
				<>
					<div className={done ? styles.donetext : styles.text}>{value}</div>
					<div className={styles.modify} onClick={onModify}><AiFillEdit/></div>
					<div className={styles.delete} onClick={onDelete}><MdDelete/></div>
				</>
				)
			 }
		</div>
	)
}

export default TodoItem;