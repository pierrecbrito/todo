import React from 'react'

interface Props {
  btnText: string
}

const TaskForm = ({btnText}: Props) => {
  return <form>
    <div>
      <label htmlFor="task">Título:</label>
      <input type="text" id="title" placeholder='Título da tarefa'/>
    </div>
    <div>
      <label htmlFor="description">Dificuldade:</label>
      <input type="text"  name="difficulty" placeholder='Dificuldade da tarefa'/>
    </div>
    <input type='submit' value={btnText}/>
  </form>
}

export default TaskForm
