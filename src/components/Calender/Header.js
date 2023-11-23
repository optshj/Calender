import React ,{useContext} from 'react';
import style from '../../css/Calender/Header.module.css';
import { DateContext } from '../../context';

import { AiFillCaretLeft,AiFillCaretRight } from "react-icons/ai";
import { addMonths,subMonths } from 'date-fns';

function Header(){ //제일 위에 있는 월,년도, 이전월, 다음월 표시
	const {date,setDate} = useContext(DateContext);

	function onPrev() {
		setDate(subMonths(date,1));
	}
	function onNext() {
		setDate(addMonths(date,1));
	}
	
	return(
		<div >
			<div className={style.form}>
				<div className={style.leftform}>
					<div className={style.day}>{date.getFullYear()}.{date.getMonth()+1}월</div>
				</div>

				<div className={style.rightform}>
					<div className={style.prev} onClick={onPrev}><AiFillCaretLeft/></div>
					<div className={style.next} onClick={onNext}><AiFillCaretRight/></div>
				</div>
			</div>
			
		</div>
	)
}

export default Header;