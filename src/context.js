import React,{createContext, useState, useReducer, useContext, useRef  } from 'react';


//날짜 Context
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



// Todo Context
const initialTodos = [];

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
	case 'MODIFY':
	  return state.map(todo=>
		  todo.id === action.id ? { ...todo, text: action.value } : todo
	  );
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(1);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
  return useContext(TodoNextIdContext);
}