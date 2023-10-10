import React, {useState, useEffect} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

//managing the actual to do list 
function TodoList() {

    //const for the tasks
    const [todos, setTodos] = useState ([]);

    // handling the local storage to have the task when reloading or closing the page
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("todos"));
        if (storedTasks) {
          setTodos(storedTasks);
        }
      }, []);
    
      useEffect(() => {
        window.onbeforeunload = () => {
          localStorage.setItem("todos", JSON.stringify(todos));
        };
    
        return () => {
          window.onbeforeunload = null;
        };
      }, [todos]);

    // const to add a task
    const addTodo = todo => {
        //what to do if there is no text
        if(!todo.text || /^\s*$/.test(todo.text)){
            return 
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        // console.log(...todos);
    };

    //const to update a task
    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return 
        }

        setTodos(prev => prev.map(item=> (item.id === todoId ? newValue : item)));
    }

    //const to delete a task
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }

    //handling the crossing out of a task
    const completeTodo = id => {

        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    }

    //returning the appropriate HTML
  return (
    <div>
        <h1>What are the tasks to be done?</h1>
        <TodoForm 
            onSubmit={addTodo}
        />

        <Todo
            todos={todos} 
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
        />
    </div>
  )
}

export default TodoList