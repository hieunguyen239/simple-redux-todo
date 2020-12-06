import {Button} from '../../form';

export default function TodoItem ({id, title, removeTodo}) {
    return (
        <li>{title}-<Button name="Remove" onClick={() => removeTodo(id)}/></li>
    )
}