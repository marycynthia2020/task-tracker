import React from 'react'

const Form = ({handleChange, handleSubmit, formData}) => {
  return (
     <form onSubmit={handleSubmit} className='flex flex-col gap-4 mb-8 '>
        <input type="text" name='title' value={formData.title} placeholder='What is the title of your tasks' className='p-2 border rouned-sm' onChange={handleChange} />
        <textarea name="description" value={formData.description}  placeholder='Add more details about the task' className='p-2  resize-none h-30 border rouned-sm' onChange={handleChange}></textarea>
        <button className='py-2 bg-green-500 rounded-sm '>Add</button>
    </form>
  )
}

export default Form