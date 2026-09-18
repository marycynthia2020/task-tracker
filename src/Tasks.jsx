import React from 'react'

const Tasks = ({tasks, handleEdit, handleDelete, handleStatus}) => {
  return (
     <ul className='max-h-120 overflow-auto'>
        {tasks.length > 0 
        ? tasks.map(task =>(
          <li key={task.id} className='grid grid-cols-[auto_1fr_auto_auto] items-center gap-4 border rounded-sm mb-4 p-2'>
            <select name="status" id="" value={task.status} className='bg-red-300 p-2 rounded-sm' onChange={(e)=>handleStatus(task.id, e.target.value)}>
              <option value="pending">Pending</option>
               <option value="in-progress">In-Progress</option>
                <option value="completed">Completed</option>
            </select>
            <div className="flex flex-col gap-4">
              <p className='font-bold text-xl'>{task.title}</p>
              <p>{task.description}</p>
            </div>
            <button disabled = {task.status === 'completed'} className= {`bg-blue-500 rounded-sm py-2 px-6 ${task.status === 'completed' ? "bg-gray-500" : ""}  `} onClick={()=>handleEdit(task.id)}>Edit</button>
            <button className='bg-red-500 rounded-sm py-2 px-4' onClick={()=> handleDelete(task.id)}>Delete</button>
          </li>
        ))
      : <p>No task added yet</p> }
      </ul>
  )
}

export default Tasks