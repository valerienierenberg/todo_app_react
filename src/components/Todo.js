import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
    // events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    };
    const completeHandler = () => {
        setTodos(todos.map(item => {
            // if the item you click on has the same id as the one from the state
            if (item.id === todo.id) {
                return {
                    // return all of what item has, except modify completed property to be true
                    ...item, completed: !item.completed
                };
            }
            return item;
        })
    );
};
    return (
        <div className="todo">
            {/* add the completed class to the item if completed property value is true */}
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;
