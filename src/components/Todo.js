import React, {useState} from 'react';
import TodoForm from './TodoForm';
import editTask from './../assets/img/edit.png';
import trash from './../assets/img/trash.png';

// component to handle the tasks 
function Todo({todos, completeTodo, removeTodo, updateTodo}) {

    //using the useState from React to declare the state variables
    const [edit, setEdit] = useState({
        id: null, 
        value:""
    })

    //const to handle the update submit
    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id:null,
            value:''
        })
    }

    // if there is an id, return the edition of the todoForm
    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    //returning the HTML to be seen on the page
    return todos.map((todo, index) => (
        // using a condition to know what class to use if the task is complete 
        // reminder : (this or that ? if true what to do : if false what to do)
        <div className={todo.isComplete ? "todo-row complete " : "todo-row"} key={index}> 
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>

        {/* adding icons to handle the update and delete buttons  */}
        <div className="icons">
            <img src={editTask} alt="edit-logo" className="edit-icon" onClick={() => setEdit({id : todo.id, value : todo.text})} />
            <img src={trash} alt="delete-logo" className="delete-icon" onClick={() => removeTodo(todo.id)} />
        </div>
    </div>
  ))
  
}

export default Todo