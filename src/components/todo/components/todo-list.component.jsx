import TodoItem from './todo-item.component';
export default function TodoList ({todos, removeTodo}) {
    return (
        <ul>
            {
                todos.map(todo => <TodoItem title={todo.title} key={todo.id} id={todo.id} removeTodo={removeTodo} />)
            }
        </ul>
    )
}