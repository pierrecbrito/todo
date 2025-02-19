import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './App.module.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';
import {ITask} from './interfaces/Task';


function App() {
  const [tasks, setTasks] = React.useState<ITask[]>([])

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const hideOrShowModal = (display:boolean) => {
    const modal = document.getElementById('modal')
    if (display) {
      modal!.classList.remove('hide')
    } else {
      modal!.classList.add('hide')
    }
  }

  const editTask = () => {
      hideOrShowModal(true)
  }

  return <div>
    <Modal children={<TaskForm btnText='Editar Tarefa' taskList={tasks}/>}/>
    <Header />
    <main className={styles.main}>
      <div>
        <h2>O que vocÊ vai fazer?</h2>
        <TaskForm btnText='Salvar Tarefa' taskList={tasks} setTaskList={setTasks}/>
      </div>
      <div>
        <h2>Suas tarefas:</h2>
        <TaskList taskList={tasks} handleDelete={deleteTask} handleEdit={editTask}/>
      </div>
    </main>
    <Footer />
  </div>
  
}

export default App;
