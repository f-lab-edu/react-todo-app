import './App.css'
import { AppTitle } from '@/components/AppTitle'
import { TodoTemplate } from '@/components/TodoTemplate'
import { SearchGroup } from '@/components/SearchGroup'
import { PlusButton } from '@/components/PlusButton'

function App() {
  return (
    <TodoTemplate>
        <AppTitle/>
        <SearchGroup/>
        <div>
            test
        </div>
        <PlusButton/>
    </TodoTemplate>
  )
}

export default App
