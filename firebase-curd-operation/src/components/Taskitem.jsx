import { useState } from "react"
import { updateTask , deleteTask } from "../services/Taskservices"

const TaskItem = ({task , onUpdate}) => {

  const [isEditing , setIsEditing] = useState(false)
  const [title , setTitle] = useState('')
  const [details , setDetails] = useState('')
  const [completed , setCompleted]=useState(task.completed)






  return (
    <div>TaskItem</div>
  )
}

export default TaskItem