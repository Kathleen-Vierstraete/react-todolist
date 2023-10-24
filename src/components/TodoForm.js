import React, {useState, useEffect, useRef} from 'react'
import { useTranslation } from 'react-i18next';


//handling the task Form 
function TodoForm(props) {

    //declaring the const for the input
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    // const input null for default
    const inputRef = useRef(null) 

    // adding an impact only for current input
    useEffect(() => {
        inputRef.current.focus()
    })

    // handling the value of the target
    const handleChange = e => {
        setInput(e.target.value);
    }
    
    // preventing the page re load
    const handleSubmit = e => {
        e.preventDefault();

        // applying a random id number to the tasks
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput("");
    }

  const { t } = useTranslation();

    // returning the proper form
    return (
        <form className='todo-form' onSubmit={handleSubmit}>

        {/* is it a form edit? */}
        {props.edit ? 
        ( 
            // if true : show the edit form
        <><input    type="text" // text type
                    placeholder="Edit a task"  // defining the placeholder
                    value={input} name="text"  // looking for an input
                    className="todo-input edit" //adding classname
                    onChange={handleChange}  // use handleChange on change
                    ref={inputRef} /> {/*default input */}
                    
            <button className="todo-button edit">{t("EditButton")}</button></> // adding a edit task button
        )        
        : 
        (
            // if false show the normal form to add a task
        <><input    type="text" 
                    placeholder={t("TaskPlaceholder")}
                    value={input} name="text" 
                    className="todo-input" 
                    onChange={handleChange} 
                    ref={inputRef} />
            <button className="todo-button">{t("AddButton")}</button></> 
        )   
    }

       
    </form>
  )
}

export default TodoForm