import React from 'react';
import Modal from 'react-modal'; //모달 라이브러리 임포트
import styles from '../../css/Todo/TodoModal.module.css';
import TodoHead from './TodoHead';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

function TodoModal({modalIsOpen,setModalIsOpen}){
	
	return(
			<Modal className={styles.popup} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
				<div className={styles.form}>
					<TodoHead setModalIsOpen={setModalIsOpen}/>
					<TodoList/>
					<TodoAdd/>
				</div>
			</Modal>
	)
}

export default TodoModal;