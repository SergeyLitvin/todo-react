import React from 'react';
import TodoListItem from './todo-list-item';
import './todo-list.css';


const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {

        // console.log(item);
        //
        // let { id, ...itemProps } = item;
        // console.log(id);
        // console.log(itemProps);
        return (
            <li key={item.id} className="list-group-item">
                <TodoListItem { ...item } />
            </li>
        );
    });
    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    )
};

export default TodoList;
