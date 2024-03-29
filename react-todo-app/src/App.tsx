import './App.css'
import { AppTitle } from '@/components/AppTitle'
import { TodoTemplate } from '@/components/TodoTemplate'
import { SearchGroup } from '@/components/SearchGroup'
import { PlusButton } from '@/components/PlusButton'
import { TodoList } from '@/components/TodoList'
import { useState } from 'react'

function App() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Cleaning up', checked: false },
        { id: 2, text: 'Call to mom', checked: false },
        { id: 3, text: 'Learning English', checked: false },
    ]);

    // PlusButton 컴포넌트에서 받은 input 값을 todos에 추가
    const handleTodoAdd = (text: string) => {
        setTodos([
            ...todos,
            {
                id: todos.length + 1,
                text: text,
                checked: false,
            },
        ]);
    };

    // TodoList 컴포넌트에서 받은 id를 가진 todo를 삭제
    const handleTodoRemove = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

  return (
    <TodoTemplate>
        <AppTitle/>
        <SearchGroup/>
        <TodoList todos={todos} onTodoRemove={handleTodoRemove}/>
        <PlusButton onTodoAdd={handleTodoAdd}/>
    </TodoTemplate>
  )
}

export default App
