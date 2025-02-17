import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './App.module.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return <div>
    <Header />
    <main className={styles.main}>
      <div>
        <h2>O que vocÊ vai fazer?</h2>
        <TaskForm btnText='Salvar Tarefa'/>
      </div>
      <div>
        <h2>Suas tarefas:</h2>
        <TaskList />
      </div>
    </main>
    <Footer />
  </div>
  
}

export default App;
