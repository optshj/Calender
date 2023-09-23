import React, {useState, useEffect} from 'react';
import styles from '../../css/Todo/TodoAdd.module.css';
import { MdAdd } from 'react-icons/md';

function TodoAdd(){
	const [open,setOpen] = useState(false);
	const [value,setValue] = useState('');
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
			<div open={open} onClick={onAdd} className={open ? styles.CircleBtnActive : styles.CircleBtn}><MdAdd/></div>
		</div>
	)
}


export default TodoAdd;