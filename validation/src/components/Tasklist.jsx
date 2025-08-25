import React, { use } from 'react'
import TaskItem from './Taskitem'
import { useEffect , useState } from 'react'
import { getTasks } from '../services/Taskservices'


const TaskList = () => {

  const [tasks , setTasks] = useState([])
  const [loading , setLoading] = useState(true)

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchTasks()
  } , [])


  if(loading) return <p className='text-gray-700 text-center'>Loading Tasks...........</p>

  return (
    <div>
      {
        tasks.length === 0 ? (
          <p>Not Task Yet........</p>
        ) : (
          tasks.map((task , index) => {
            return(
              <TaskItem key={index} task={task} onUpdate={fetchTasks}/>
            )
          })
        )
      }
    </div>
  )
}

export default TaskList