import React,{useContext} from 'react';
import styles from '../css/CalenderBody.module.css';
import {DateContext } from '../context';
import Header from './Header';
import Cells from './Cells';
import Week from './Week';

function CalenderBody(){
	const {date,setDate} = useContext(DateContext);
	
	return(
		<div>
			<Header/>
			<Week/>
			<Cells day={2}/>
		</div>
	)
}

export default CalenderBody;