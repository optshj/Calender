import React, {useState, useContext} from 'react';
import styles from '../../css/Todo/TodoAdd.module.css';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch,useTodoNextId } from '../../context';
import { DateContext } from "../../context";

function TodoAdd(){
	
	const [open,setOpen] = useState(false);
	const [value,setValue] = useState('');
	const {select} = useContext(DateContext);
	const dispatch = useTodoDispatch();
	const nextId = useTodoNextId();
	const randomColor = () => {
		const color_r = Math.floor(Math.random() * 127 + 128).toString(16);
		const color_g = Math.floor(Math.random() * 127 + 128).toString(16);
		const color_b = Math.floor(Math.random() * 127 + 128).toString(16);
  		return `#${color_r+color_g+color_b}`;
	}
	
	const onAdd = () =>{
		if (open){
			setOpen(false); // 열려있으면 닫기
		}
		else {
			setOpen(true); // 닫혀있으면 열기
		}
	}
	const onChange= (e) =>{
		setValue(e.target.value);
	}
	const onSubmit = (e) => {
		e.preventDefault();
		
		if (value){
			dispatch({
			type:"CREATE",
			todo:{
				id:nextId.current,
				date:select,
				text:value,
				done:false,
				color:randomColor()
				}
			});
		}
		nextId.current += 1;
		setOpen(false); // 추가 닫기
		setValue(''); // 내용 초기화
	}
	
	
	return(
		<div>
			{open &&(
			<form onSubmit={onSubmit}>
				<div className={styles.form}>
					<input autoFocus placeholder= "일정을 입력 후, Enter 를 누르세요" onChange={onChange} value = {value}/>
				 </div>
			</form>)
			 }
			<div onClick={onAdd} className={open ? styles.CircleBtnActive : styles.CircleBtn}><MdAdd/></div>
		</div>
	)
}


export default TodoAdd;