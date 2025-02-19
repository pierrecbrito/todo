import React from 'react'

//interfaces
import {ITask} from '../interfaces/Task'

import styles from './TaskList.module.css'

interface Props {
  taskList: ITask[];
}

const TaskList = ({taskList}: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.task_info}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.task_actions}>
              <i className='bi bi-pencil'></i>
              <i className='bi bi-trash'></i>
            </div>
          </div>
          
        ))) : (<p>Não tem tarefas cadastradas</p>)}
    </>
  )
}

export default TaskList