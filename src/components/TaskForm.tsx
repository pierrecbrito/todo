import React from 'react'
import styles from './TaskForm.module.css'

interface Props {
  btnText: string
}

const TaskForm = ({btnText}: Props) => {
  return <form className={styles.form}>
    <div className={styles.input_container}>
      <label htmlFor="task">Título:</label>
      <input type="text" id="title" placeholder='Título da tarefa'/>
    </div>
    <div className={styles.input_container}>
      <label htmlFor="description">Dificuldade:</label>
      <input type="text"  name="difficulty" placeholder='Dificuldade da tarefa'/>
    </div>
    <input type='submit' value={btnText}/>
  </form>
}

export default TaskForm
