import React from 'react';
import CalenderBody from './components/Calender/CalenderBody';
import DateContextProvider from './context';
import {TodoProvider} from './context';

function App(){
	window.localStorage.setItem('id',0);
    return (
		<div>
			<DateContextProvider>
				<TodoProvider>
					<CalenderBody/>
				</TodoProvider>
			</DateContextProvider>
		</div>
    );
}

export default App;