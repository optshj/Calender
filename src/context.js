import React,{createContext, useState } from 'react';

export const DateContext = createContext();

const DateContextProvider = ({children}) =>{
	const [date,setDate] = useState(new Date());
	const [select,setSelect] = useState(new Date());
	const value = {date,setDate,select,setSelect};
	return(
		<DateContext.Provider value={value}>{children}</DateContext.Provider>
	)
}
export default DateContextProvider;