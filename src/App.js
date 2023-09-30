import React from 'react';
import CalenderBody from './components/Calender/CalenderBody';
import DateContextProvider from './context';
import {TodoProvider} from './context';

function App(){
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