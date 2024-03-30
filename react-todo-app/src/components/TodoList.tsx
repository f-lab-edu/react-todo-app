import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, onTodoRemove}) => {
    return (
        <div className="TodoList pt-4">
            {todos.map((todo) => (
                <TodoListItem
                    todo={todo}
                    onTodoRemove={onTodoRemove}
                    key={todo.id}
                />
            ))}
        </div>
    )
}