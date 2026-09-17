import { useEffect, useState } from 'react'
import './App.css'
import Tasks from './Tasks'
import Form from './Form'
import {nanoid} from "nanoid"

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [])
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    status: "pending"
  })

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const handleChange = (e)=>{
    e.preventDefault()
    setFormData(prev=> {
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!formData.title || !formData.description) return

    if(formData.id){
      setTasks(prev => prev.map(task => task.id === formData.id ? {...task, title: formData.title, description: formData.descriptionkml} : task))
    }else{
      const newTask = {id: nanoid(), title: formData.title, description: formData.description, status:  "pending"}
    setTasks(prev=> [newTask, ...prev])
    }
    setFormData({
      id: "",
      title: "",
      description: "",
      status: "pending"
    })
  }

  const handleEdit =  (id)=>{
    const taskToEdit = tasks.find(task=> task.id === id)
    if(taskToEdit){
      setFormData({id: taskToEdit.id, title: taskToEdit.title, description: taskToEdit.description, status: taskToEdit.status})
    }
  }
  const handleDelete = (id)=>{
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }

  const handleStatus =(id, status)=>{
    setTasks(prev=> prev.map(task => task.id === id ? {...task, status: status} : task))
  }

  return (
    <div className="flex flex-col gap-4 ">
      <h1 className='text-2xl font-bold'>My Tasks</h1>
     <Form handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} />
      <Tasks tasks={tasks} handleEdit={handleEdit} handleDelete={handleDelete} handleStatus={handleStatus} />
    </div>
  
  )
}

export default App
