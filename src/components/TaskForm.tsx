import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react'
import styles from './TaskForm.module.css'
import {ITask} from '../interfaces/Task'

interface Props {
  btnText: string,
  taskList?: ITask[],
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm = ({btnText, taskList, setTaskList}: Props) => {
  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [difficulty, setDifficulty] = useState<number>(0)

  const addTaskHandler = (e: FormEvent) => {
    e.preventDefault()
    if (title.trim() !== '') {
      setId(id + 1)
      setTaskList!([...taskList!, {
        id: id,
        title: title,
        difficulty: difficulty
      }])
      setTitle('')
      setDifficulty(0)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'title') {
      setTitle(e.target.value)
    } else {
      setDifficulty(parseInt(e.target.value))
    }
  }

  return <form className={styles.form} onSubmit={addTaskHandler}>
    <div className={styles.input_container}>
      <label htmlFor="task">Título:</label>
      <input type="text" id="title" placeholder='Título da tarefa' onChange={handleChange}/>
    </div>
    <div className={styles.input_container}>
      <label htmlFor="description">Dificuldade:</label>
      <input type="number"  name="difficulty" placeholder='Dificuldade da tarefa'  onChange={handleChange}/>
    </div>
    <input type='submit' value={btnText}/>
  </form>
}

export default TaskForm
