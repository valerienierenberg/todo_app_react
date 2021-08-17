import React from 'react';

// create component
const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
    // javascript function
    const inputTextHandler = (e) => {
      setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
      // prevent refresh upon clicking plus button
      e.preventDefault();
      // create an object that holds the input text, boolean, and id
      setTodos([
        ...todos,
        {text: inputText, completed: false, id: Math.random() * 1000 }
      ]);
      // reset state of input Text back to being empty 
      setInputText("");
    };
    const statusHandler = (e) => {
      setStatus(e.target.value);
    };
    return(
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
};

export default Form;
