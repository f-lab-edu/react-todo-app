import {TodoListItem} from './TodoListItem';

export const TodoList = ({todos, onTodoRemove}: { todos: any, onTodoRemove: any }) => {
  return (
    <div className="TodoList pt-4">
      {todos.map((todo: any) => (
        <TodoListItem
          todo={todo}
          onTodoRemove={onTodoRemove}
          key={todo.id}
        />
      ))}
    </div>
  )
}