import './App.css'
import TaskForm from './components/Taskform'
import TaskList from './components/Tasklist'

const App = () => {
  return (
    <div>
      <h1 className='head'>This is Firebase and Authentication BaaS Module</h1>
     <TaskForm/>
      <TaskList/>
    </div>
  )
}

export default App