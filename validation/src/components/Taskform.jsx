import React from "react";
import { useState } from "react";
import { addTask } from "../services/Taskservices";

const TaskForm = ({onTaskAdded}) => {

  const [title , setTitle] = useState('')
  const [details , setDetails] = useState('')

  const handlesubmit = async(e) => {
    e.preventDefault()
    if(!title.trim()) return;

    const newTask = {
      title,
      details,
      completed:true,
      createdAt: new Date().toString()
    }

    console.log('newTask' , newTask);
    

    await addTask(newTask);
    setTitle('')
    setDetails('')
    if(onTaskAdded) onTaskAdded();
  }


  return (
    <div className="flex justify-center h-screen items-center">
      <div>
      <h2 className="text-center">Add Task</h2>
      <form className="max-w-md mx-auto bg-gray-300 p-12 border-2 border-gray-700" onSubmit={handlesubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="tasktitle"
            id="tasktitle"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label
            htmlFor="tasktitle"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Task Title
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <textarea
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            name="taskdetails"
            id="taskdetails"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
          <label
            htmlFor="taskdetails"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Task Details
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      </div>
    </div>
  );
};

export default TaskForm;