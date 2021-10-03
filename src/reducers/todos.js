import {ADD_TODO, TOGGLE_TODO, CLEAR_TODO} from '../constants/action-types';

const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];

const todos = (state = storedTodos, ation) => {

switch(action.type){
  case ADD_TODO:
	localStorage.setItem('todos', JSON.stringify([...state, action.payload]));
	return [...state, action.payload];
  
  case CLEAR_TODOS:
	localStorage.removeItem('todos');
	return [];
  
  case TOGGLE_TODO:
	let modifiedTodos = state.map(todo => {
		if(todo.id === action.id)
		return Object.assign({},todo, {completed: !todo.completed});


}); 
 

localStorage.setItem('todos',JSON.stringify(modifiedTodos));
return modifiedTodos;

default:
return state;


export default todos;
