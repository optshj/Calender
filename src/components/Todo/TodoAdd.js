import React, {useState, useContext} from 'react';
import styles from '../../css/Todo/TodoAdd.module.css';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../../context';
import { DateContext } from "../../context";

function TodoAdd(){
	
	const [open,setOpen] = useState(false);
	const [value,setValue] = useState('');
	const [warn,setWarn] = useState(false);
	
	const {select} = useContext(DateContext);
	const dispatch = useTodoDispatch();
	const nextId = useTodoNextId();
	const randomColor = () => {
		const color_r = Math.floor(Math.random() * 127 + 64).toString(16);
		const color_g = Math.floor(Math.random() * 127 + 64).toString(16);
		const color_b = Math.floor(Math.random() * 127 + 64).toString(16);
  		return `#${color_r+color_g+color_b}`;
	}
	
	const onAdd = () =>{
		if (open){
			setOpen(false); // 열려있으면 닫기
		}
		else {
			setOpen(true); // 닫혀있으면 열기
			setWarn(false); // 경고 초기화
		}
	}
	const onChange= (e) =>{
		setValue(e.target.value);
	}
	const onSubmit = (e) => {
		e.preventDefault();
		if (value.length > 10){
			setWarn(true); // 경고문 출력
			setValue('');
		}
		else if (value){
			const todo = {
				id:nextId.current,
				date:select.toDateString(),
				text:value,
				done:false,
				color:randomColor()
			}
			nextId.current += 1;
			dispatch({type:"CREATE",todo});
			setOpen(false); // 추가 닫기
			setValue(''); // 내용 초기화
		}
	}
	
	
	return(
		<div>
			{open &&(
			<form onSubmit={onSubmit}>
				<div className={styles.form}>
					<div className={warn?styles.warn:styles.label}>{warn? '10자 이내로 입력해주세요.' : '일정을 입력 후, Enter 를 누르세요.(10자 이내)'}</div>
					<input autoFocus onChange={onChange} value = {value}/>
				 </div>
			</form>)
			 }
			<div onClick={onAdd} className={open ? styles.CircleBtnActive : styles.CircleBtn}><MdAdd/></div>
		</div>
	)
}


export default TodoAdd;