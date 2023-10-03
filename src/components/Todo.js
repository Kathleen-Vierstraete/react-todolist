import React, {useState} from 'react';
import TodoForm from './TodoForm';
import editTask from './../assets/img/edit.png';
import trash from './../assets/img/trash.png';

function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null, 
        value:""
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id:null,
            value:''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? "todo-row complete " : "todo-row"} key={index}> 
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>

        <div className="icons">
            <img src={editTask} alt="edit-logo" className="edit-icon" onClick={() => setEdit({id : todo.id, value : todo.text})} />
            <img src={trash} alt="delete-logo" className="delete-icon" onClick={() => removeTodo(todo.id)} />
        </div>
    </div>
  ))
  
}

export default Todo