import { actionType } from '../../actions';
import { updateState } from '../../../utils';

const initialState = {
  todos: []
};

const addTodo = (state, action) => {
	const { todo } = action;
	const todos = state.todos.slice();
	todos.push(todo);
	return updateState(state, { todos });
}

const removeTodo = (state, action) => {
	const { id } = action;
	const filterTodos = state.todos.filter(item => id !== item.id);
	return updateState(state, { todos: filterTodos });
}

const todoReducer = (state = initialState, action) => {
	const { type } = action;
	switch(type) {
		case actionType.ADD:
			return addTodo(state, action);
		case actionType.REMOVE:
			return removeTodo(state, action);
		default:
			return initialState;
	}
};

export default todoReducer;