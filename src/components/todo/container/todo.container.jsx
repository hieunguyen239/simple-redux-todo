import { Form, Input, Submit } from '../../form';
import TodoList from '../components/todo-list.component';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { todoAction } from '../../../stores/actions';

const TodoContainer = props => {
    const initState = {
        title: '',
        isClear: false,
    };
    const [state, setState] = useState(initState);
    const onAddTodo = (e) => {
        e.preventDefault();
        const { title } = state;
        if (title.trim()) {
            const todo = { id: (new Date()).getTime(), title };
            props.addTodo(todo);
            setState({...state, title: '', isClear: true});
        }
    };

    useEffect(() => {
        if (state.isClear) {
            setState({...state, isClear: false});
        }
    }, [state])

    const onTodoTextChange = (value) => {
        setState({...state, title: value});
    };

    const onRemoveTodo = (id) => {
        props.removeTodo(id);
    };

    return (
        <>
            <Form onSubmit={onAddTodo}>
                <Input onChange={onTodoTextChange} isClear={state.isClear} />
                <Submit name="Add" />
            </Form>
            <TodoList todos={props.todos} removeTodo={onRemoveTodo} />
        </>
    )
}

const mapStateToProps = state => {
    return {
        todos: state.todoReducer.todos
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: todo => dispatch(todoAction.add(todo)),
        removeTodo: id => dispatch(todoAction.remove(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);