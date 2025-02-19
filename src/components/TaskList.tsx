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
      {taskList.length > 0 ? (<p>Tem tarefas cadastradas</p>) : (<p>Não tem tarefas cadastradas</p>)}
    </>
  )
}

export default TaskList