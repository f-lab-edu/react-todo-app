// 상태관리 zustand 사용
import create from 'zustand'

type Todo = {
  id: number
  text: string
  checked: boolean
}

type Store = {
  todos: Todo[]
  addTodo: (text: string) => void
  removeTodo: (id: number) => void
}

export const useStore = create<Store>((set) => ({
  todos: [
    {id: 1, text: 'Cleaning up', checked: false},
    {id: 2, text: 'Call to mom', checked: false},
    {id: 3, text: 'Learning English', checked: false},
  ],
  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, {id: state.todos.length + 1, text, checked: false}],
    })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}))