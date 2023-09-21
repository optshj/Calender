import React from 'react';
import CalenderBody from './components/CalenderBody';
import DateContextProvider from './context';

function App(){
    return (
		<div>
			<DateContextProvider>
				<CalenderBody/>
			</DateContextProvider>
		</div>
    );
}

export default App;