import './App.css'
import {AppTitle} from '@/components/AppTitle'
import {TodoTemplate} from '@/components/TodoTemplate'
import {SearchGroup} from '@/components/SearchGroup'
import {PlusButton} from '@/components/PlusButton'
import {TodoList} from '@/components/TodoList'
import {useState} from 'react'
import {useStore} from './store'

function App() {
  const todos = useStore((state) => state.todos);
  const addTodo = useStore((state) => state.addTodo);
  const removeTodo = useStore((state) => state.removeTodo);

  // search input value
  const [search, setSearch] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  // search input value와 todos의 text를 비교하여 일치하는 todo만 보여줌
  const filteredTodos = todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()));
  return (
    <TodoTemplate>
      <AppTitle/>
      <SearchGroup onChangeInput={handleSearchChange}/>
      <TodoList todos={filteredTodos} onTodoRemove={removeTodo}/>
      <PlusButton onTodoAdd={addTodo}/>
    </TodoTemplate>
  )
}

export default App
